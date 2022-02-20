import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BACKEND_URL} from "../../../constants/url";
import {useParams} from 'react-router-dom';
import TornamentTable from "./TornamentTable";
import Matches from './Matches';


const mokTornamentData = {
    description: "Chess Tournament123",
    id: 8,
    last_registration_date: "2024-12-12T00:00:00.000Z",
    level: "middle",
    mode: "championship",
    name: "LK best papich hero1",
    number_of_participants: 32,
    place: "Dnipro",
    players: 6,
    scenario: "one match confrontation",
    start_date: "2024-12-12T00:00:00.000Z",
    status: "active",
};

type TTortament = {
    description?: string,
    id: number,
    last_registration_date?: string,
    level: string,
    mode: string,
    name: string,
    number_of_participants: number,
    place: string,
    players: number,
    scenario: string,
    start_date: string,
    status: string,
}

const Tournament = () => {
    const {id} = useParams();
    const [ tournament, setTournament ] = useState<TTortament>(mokTornamentData);

    useEffect(() => {
        getTournament();
    }, []);

    const getTournament = async () => {
        try {
            const { data } = await axios.get(BACKEND_URL.TOURNAMENT_URL, { params: { id: `${id}` } });
            setTournament(data[0]);
        } catch (error) {
            return false;
        }
    };


    return (
        <div>
            <h1>{tournament.name}</h1>
            <h2>{tournament.description}</h2>
            <TornamentTable id={id} />
            <Matches id={id}/>
        </div>
    );
};

export default Tournament;
