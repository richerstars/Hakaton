import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BACKEND_URL} from "../../../constants/url";
import {useParams} from 'react-router-dom';
import {StForm, StP} from "./styled";

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

    return (
        <div>
            {Object.keys(tournament).length
                ?'Single Tournament'
                :<StForm>
                    <StP>Tournament with the selected id does not exist. Select the correct tournament id</StP>
                </StForm>}
        </div>
    );
};

export default Tournament;