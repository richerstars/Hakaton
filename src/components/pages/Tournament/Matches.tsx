import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BACKEND_URL} from "../../../constants/url";
import SinglMatch from "./SinglMatch/SinglMatch";
import {StMatches} from './styled';
import {TMatch} from "../../../Types/Types";

type TProps = {
    id: string | undefined,
    theme: string
};

const Matches: React.FC<TProps> = ({id, theme}) => {

    const [matches, setMatches] = useState<TMatch[]>([]);
    useEffect( ()=> {
        getTournamentTable();
    },[]);

    const getTournamentTable = async () => {
        try {
            const { data } = await axios.get(BACKEND_URL.GET_MATCHE_BY_CHAMPIONSHIP, { params: { tournament_id: `${id}` } });
            setMatches(data);
        } catch (error) {
            return false;
        }
    };
    return (
        <StMatches>
            {matches?.map((el) => {
                return <SinglMatch theme={theme} key={el.id} {...el}/>;
            })}
        </StMatches>
    );
};

export default Matches;