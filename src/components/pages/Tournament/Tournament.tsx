import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BACKEND_URL} from "../../../constants/url";
import {useParams} from 'react-router-dom';

const Tournament = () => {
    const {id} = useParams();
    const [ tournament, setTournament ] = useState({});
    const getTournamet = async () => {
        try {
            const { data } = await axios.get(BACKEND_URL.TOURNAMENT_URL, { params: { id: `${id}` } });
            setTournament(data);
        } catch (error) {
            return false;
        }
    };
    useEffect(() => {
        getTournamet();
    }, []);
    console.log(tournament);
    return (
        <div>
            Single Tournament
        </div>
    );
};

export default Tournament;
