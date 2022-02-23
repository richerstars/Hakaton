import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {StRow, StCardInfo, StCard, StInput} from './styled';
import axios from "axios";
import {BACKEND_URL} from "../../../../constants/url";
import {TUser} from "../../../../Types/Types";

type TProps = {
    "id": number,
    "first_user_score":number,
    "second_user_score": number,
    "date_match": string,
    "status": string,
    theme: string,
    first_user: TUser,
    second_user: TUser
}

const SinglMatch: React.FC<TProps> = ({
    id,
    first_user_score: firstUserScoreProps,
    second_user_score :secondUserScoreProps,
    date_match: dateMatch,
    first_user,
    second_user,
    theme}) => {

    const [state, setState] = useState({firstUserScore: 0, secondUserScore: 0});

    useEffect(() => {
        setState({firstUserScore: firstUserScoreProps, secondUserScore: secondUserScoreProps  });
    },[]);

    const firstUserChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => setState({...state, firstUserScore: Number(event.target.value)});
    const secondUserChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => setState({...state, secondUserScore: Number(event.target.value)});
    const buttonHandleClick = () => {axios.post(BACKEND_URL.SET_MATCH_RESULT, {
        match_id: id,
        first_user_score: state.firstUserScore,
        second_user_score: state.secondUserScore
    }); };
    const isAdmin = document.cookie === 'role=admin';
    return (
        <StCard theme={theme}>
            <StCardInfo>
                {new Date(dateMatch).toLocaleString()}
                <StRow>
                    <p>{first_user.login}</p>
                    <StInput readOnly={!isAdmin} theme={theme} onChange={firstUserChangeInput} value={state.firstUserScore} />
                </StRow>
                <StRow>
                    <p>{second_user.login}</p>
                    <StInput readOnly={!isAdmin} theme={theme} onChange={secondUserChangeInput} value={state.secondUserScore} />
                </StRow>
            </StCardInfo>
            {isAdmin ?  <Button onClick={buttonHandleClick} variant="contained" > Set result </Button> : null }

        </StCard>
    );
};

export default SinglMatch;