import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {StRow, StCardInfo, StCard, StInput} from './styled';

type TProps = {
    "id": number,
    firstUser: string,
    secondUser: string,
    "first_user_score":number,
    "second_user_score": number,
    "date_match": string,
    "status": string
}

const SinglMatch: React.FC<TProps> = ({
    first_user_score: firstUserScoreProps,
    second_user_score :secondUserScoreProps,
    date_match: dateMatch,
    firstUser,
    secondUser}) => {

    const [state, setState] = useState({firstUserScore: '0', secondUserScore: '0'});

    useEffect(() => {
        setState({firstUserScore: firstUserScoreProps.toString(), secondUserScore: secondUserScoreProps.toString()  });
    },[]);

    const firstUserChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => setState({...state, firstUserScore: event.target.value});
    const secondUserChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => setState({...state, secondUserScore: event.target.value});

    return (
        <StCard>
            <StCardInfo>
                {new Date(dateMatch).toISOString()}
                <StRow>
                    <p>{firstUser}</p>
                    <StInput onChange={firstUserChangeInput} value={state.firstUserScore} />
                </StRow>
                <StRow>
                    <p>{secondUser}</p>
                    <StInput onChange={secondUserChangeInput} value={state.secondUserScore} />
                </StRow>
            </StCardInfo>
            <Button variant="contained" > Set result </Button>
        </StCard>
    );
};

export default SinglMatch;