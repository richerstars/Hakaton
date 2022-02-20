import React, {useEffect, useState} from 'react';
// import axios from "axios";
// import {BACKEND_URL} from "../../../constants/url";
import SinglMatch from "./SinglMatch/SinglMatch";
import {StMatches} from './styled';

type TProps = {
    id: string | undefined
};

const data = [
    {
        "id": 3,
        firstUser: 'Andew',
        secondUser: 'Vasia',
        "first_user_score": 0,
        "second_user_score": 0,
        "date_match": "2022-02-13T20:43:39.581Z",
        "status": "coming"
    },
    {
        "id": 4,
        firstUser: 'Shapikso',
        secondUser: 'Oon1k',
        "first_user_score": 0,
        "second_user_score": 0,
        "date_match": "2022-02-13T20:43:39.588Z",
        "status": "coming"
    }];

type TMatch = {
    "id": number,
    firstUser: string,
    secondUser: string,
    "first_user_score":number,
    "second_user_score": number,
    "date_match": string,
    "status": string
}

const Matches: React.FC<TProps> = ({id}) => {

    const [matches, setMatches] = useState<TMatch[]>([]);
    useEffect( ()=> {
        getTournamentTable();
    },[]);

    const getTournamentTable = async () => {
        try {
            //const { data } = await axios.get(BACKEND_URL.TOURNAMENT_TABLE, { params: { tournament_id: `${id}` } });
            console.log(id);
            setMatches(data);
        } catch (error) {
            return false;
        }
    };
    return (
        <StMatches>
            {matches.map((el) => {
                return <SinglMatch key={el.id} {...el}/>;
            })}
        </StMatches>
    );
};

export default Matches;