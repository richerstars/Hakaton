import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BACKEND_URL} from "../../../constants/url";
import {useParams} from 'react-router-dom';
import TornamentTable from "./TornamentTable";
import Matches from './Matches';
import {StTournamentWrapper} from "./styled";
import {TTortament} from "../../../Types/Types";


type TProps = {
    theme: string
};

const Tournament = ({theme}:TProps) => {
    const {id} = useParams();
    const [ tournament, setTournament ] = useState<TTortament| null>(null);

    useEffect(() => {
        getTournament();
    }, []);

    const getTournament = async () => {
        try {
            const { data: {data} } = await axios.get(BACKEND_URL.TOURNAMENT_URL, { params: { id: `${id}` } });
            setTournament(data[0]);
        } catch (error) {
            return false;
        }
    };

    return (
        <StTournamentWrapper theme={theme}>
            <h1>{tournament?.name}</h1>
            <h2>{tournament?.description}</h2>
            <TornamentTable theme={theme} id={id} />
            <Matches theme={theme} id={id}/>
        </StTournamentWrapper>
    );
};

export default Tournament;
