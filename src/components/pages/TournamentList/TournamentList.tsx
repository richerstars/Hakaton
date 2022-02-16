import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { BACKEND_URL } from '../../../constants/url';
import { useEffect, useState } from 'react';
import { COLORS } from '../../../constants/colors';
import {StButtonWrapper, StTableDiv} from './styled';
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import MainLoader from "../../common/Loader/MainLoader";

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

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'description', headerName: 'Tournament description', width: 200 },
    { field: 'place', headerName: 'Place', width: 130 },
    { field: 'level', headerName: 'Level', width: 170 },
    { field: 'players', headerName: 'Amount ', width: 150 },
    { field: 'number_of_participants', headerName: 'Players', width: 100 },
    { field: 'scenario', headerName: 'Scenario', width: 180 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'status', headerName: '', width: 400, sortable: false, disableClickEventBubbling: true,
        renderCell: (params:any) => {
            const [open, setOpen] = React.useState(false);
            const [ players, setPlayers ] = useState<Array<{label:string, id: number}>>([]);
            const [tournamentId, setTournamentId ] = useState('');
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
            const handleOpen = async () => {
                setOpen(true);
                setTournamentId(params.id);
                await getPlayers();
            };
            const handleClose = () => setOpen(false);
            const navigate = useNavigate();
            const handleClickOpenGrid = () => {
                navigate(`/tournament/${params.id}`);
            };
            const handleKeyDown = async (e:React.KeyboardEvent) => {
                const element = e.target;
                // @ts-ignore
                const playerSingle = players.find((elem) => elem.label === element.value.trim());
                if (playerSingle) setPlayerId(playerSingle?.id);
                if (e.key === 'Enter') {
                    await addPlayers(playerSingle?.id);
                    handleClose();
                    location.reload();
                }
            };

            return (params.row.mode !== 'cup' &&
                <StButtonWrapper>
                    <IconButton
                        onClick={handleClickOpenGrid}
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                    >
                        <FileOpenIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                        onClick={handleOpen}
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        disabled={params.row.players === params.row.number_of_participants}
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
                </StButtonWrapper>
            );
        }}
];

const TournamentList = ({ theme }: any) => {
    const [ tableData, setTableData ] = useState([]);
    const [isLoading, setIsLoading] = useState (true);
    const getTournaments = async () => {
        try {
            const { data } = await axios.get(BACKEND_URL.TOURNAMENT_URL);
            setTableData(data);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getTournaments();
    }, []);
    return (
        <StTableDiv>
            {isLoading
                ?(<MainLoader />)
                :<DataGrid
                    sx={{
                        borderColor: `${theme === 'light'
                            ? `${COLORS.BACKGROUND_HEADER_LIGHT}`
                            : `${COLORS.SEMI_PRIMARY_COLOR_SEC}`}`,
                        backgroundColor: `${theme === 'light'
                            ? `${COLORS.BACKGROUND_MAIN}` : `${COLORS.TABLE_GRID_DARK}`}`,
                        color: `${theme === 'light' ? `${COLORS.BLACK}` : 'black'}`,
                        fontSize: '20px',
                        textAlign: 'center',
                    }}
                    rows={tableData}
                    columns={columns}
                    pageSize={12}
                    rowsPerPageOptions={[ 12 ]}
                />
            }
        </StTableDiv>
    );
};

export default TournamentList;
