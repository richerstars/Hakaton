import React, {useEffect, useState} from 'react';
import Header from "./Table/Header";
import Row from "./Table/Row";
import Button from "@mui/material/Button";
import {BACKEND_URL} from "../../../constants/url";
import axios from "axios";

type TableData = {
    "id": number,
    "score": number,
    "user": {
        "session": [
            {
                "expired_at": string
            }
        ],
        "id": number,
        "login": string,
        "email": string,
        "password": string,
        "role": "user" | "admin",
        "first_name": string,
        "last_name": string,
        "date_of_birthday": string,
        "gender": string,
        "confirmation_send_at": string,
        "activated_at": string,
        "games": number,
        "wins": number,
        "draws": number,
        "loses": number,
        "cup_wins": number
    }};
type TProps = {
    id: string | undefined
};


const TornamentTable: React.FC<TProps> = ({id}) => {

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
        <div>
            {table.length
                ? (<>
                    <Header/>
                    {
                        table.map((el) => <Row
                            player={[el.user.login,
                                el.score.toString(),
                                el.user.games.toString(),
                                el.user.wins.toString() ]}
                            key={el.user.login} />)
                    }</>)
                : <Button variant="contained" onClick={handleClick}> Start Tournament </Button>
            }

        </div>
    );
};

export default TornamentTable;