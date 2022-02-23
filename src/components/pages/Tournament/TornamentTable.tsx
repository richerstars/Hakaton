import React, {useEffect, useState} from 'react';
import Header from "./Table/Header";
import Row from "./Table/Row";
import Button from "@mui/material/Button";
import {BACKEND_URL} from "../../../constants/url";
import axios from "axios";
import {StTable} from "./styled";
import {TableData} from "../../../Types/Types";

type TProps = {
    id: string | undefined,
    theme: string
};


const TornamentTable: React.FC<TProps> = ({id, theme}) => {

    const [table, setTable] = useState<Array<TableData>>([]);
    useEffect( ()=> {
        getTournamentTable();
    },[]);

    const getTournamentTable = async () => {
        try {
            const { data } = await axios.get(BACKEND_URL.TOURNAMENT_TABLE, { params: { tournament_id: `${id}` } });
            setTable(data);
        } catch (error) {
            return false;
        }
    };

    const handleClick = async () => {
        try {
            await axios.post(BACKEND_URL.START_TOURNAMENT, {  tournament_id: `${id}`  });
            getTournamentTable();
        } catch (error) {
            return false;
        }
    };


    return (
        <StTable>
            {table.length
                ? (<>
                    <Header theme={theme}/>
                    {
                        table.map((el) => <Row
                            player={[el.user.login,
                                el.score.toString(),
                                el.user.games.toString(),
                                el.user.wins.toString() ]}
                            key={el.user.login}
                            theme={theme}
                        />)
                    }</>)
                :  document.cookie === 'role=admin'
                    ? <Button variant="contained" onClick={handleClick}> Start Tournament </Button>
                    : <h1>Tournament not started </h1>
            }
        </StTable>
    );
};

export default TornamentTable;