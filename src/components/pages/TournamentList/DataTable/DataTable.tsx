import React, {useState} from 'react';
import {v1 as uuid} from 'uuid';
import FileOpenIcon from "@mui/icons-material/FileOpen";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {StButtonWrapper} from "../styled";
import axios from "axios";
import {BACKEND_URL} from "../../../../constants/url";
import {useNavigate} from "react-router-dom";
import {TRow} from "../../../../Types/Types";
import {StButton, StTable, StTd, StTh, StThead, StTr} from "./styled";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type TProps = {
    data: Array<TRow>,
    sortBy: (key: string) => void,
    direction: string,
    getTournaments: () => void
}

const Datatable: React.FC<TProps> = ({data, sortBy, direction, getTournaments}) => {
    const columns = ['name', 'description', 'mode', 'place', 'level', 'number_of_participants', 'status', 'scenario', 'players', 'edit'];
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [ players, setPlayers ] = useState<Array<{label:string, id: number}>>([]);
    const [tournamentId, setTournamentId ] = useState< string | number>('');
    const [playerId, setPlayerId] = useState<number|null>(null);
    const getPlayers = async () => {
        try {
            const { data } = await axios.get(BACKEND_URL.PLAYERS_URL);
            const playersReq = data.map((player:{login:string, id: number})=>{
                return {label: player.login, id: player.id};
            });
            setPlayers(playersReq);
        } catch (error) {
            return false;
        }
    };
    const addPlayers = async (id?:number) => {
        try {
            await axios.post(`${BACKEND_URL.ADD_USER_TO_TOURNAMENT}`, {
                tournament_id: tournamentId,
                user_id: id||playerId
            });
        } catch (error) {
            return false;
        }
    };
    const handleClose = () => {
        setOpen(false);
        getTournaments();
    };

    const handleKeyDown = async (e:React.KeyboardEvent) => {
        const element = e.target;
        // @ts-ignore
        const playerSingle = players.find((elem) => elem.label === element.value.trim());
        if (playerSingle) setPlayerId(playerSingle?.id);
        if (e.key === 'Enter') {
            await addPlayers(playerSingle?.id);
            handleClose();
        }
    };

    return (
        <StTable>
            <StThead>
                <StTr>
                    {columns.map((heading) => {
                        if (heading === 'edit') {
                            return <StTh key={heading}>{heading}</StTh>;
                        }
                        return <StTh key={heading}>
                            <p>{heading}</p>
                            <StButton onClick={() => sortBy(heading)}>{`Sort by ${direction}`}</StButton>
                        </StTh>;}
                    )}
                </StTr>
            </StThead>
            <tbody>
                {data.map ((row: TRow) => <StTr key={row.id}>
                    {columns.map(column => {
                        if (column === 'edit') {
                            return (
                                <StTd key={row.id} >{row.mode !== 'cup' &&
                                        <StButtonWrapper>
                                            <IconButton
                                                onClick={() => navigate(`/tournament/${row.id}`)}
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                            >
                                                <FileOpenIcon fontSize="large" />
                                            </IconButton>
                                            <IconButton
                                                onClick={ async () => {
                                                    setOpen(true);
                                                    setTournamentId(row.id);
                                                    await getPlayers();
                                                }}
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                disabled={row.players === row.number_of_participants}
                                            >
                                                <AddBoxIcon fontSize="large" />
                                            </IconButton>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                        Choose player
                                                    </Typography>
                                                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                                                        <Autocomplete
                                                            onKeyDown={handleKeyDown}
                                                            disablePortal
                                                            id="combo-box-demo"
                                                            options={players}
                                                            sx={{width: 300}}
                                                            renderInput={(params) => {
                                                                return <TextField {...params} label="Player Login"/>;
                                                            }}
                                                        />
                                                    </Typography>
                                                </Box>
                                            </Modal>
                                        </StButtonWrapper>}
                                </StTd>
                            );
                        }
                        return <td style={{maxWidth: '200px'}} key={uuid()}>{row[column]}</td>;
                    })}
                </StTr>)}
            </tbody>
        </StTable>
    );
};

export default Datatable;
