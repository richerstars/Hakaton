import React from "react";
import {StyledFirstPage, StyledFirstPageText, StH3, StP} from "./styled";
import { useNavigate} from "react-router-dom";
import {URL} from "../../constants/url";
import Button from '@mui/material/Button';

const FirstPages = () => {
    const navigate = useNavigate();
    return (
        <StyledFirstPage>
            <StyledFirstPageText>
                <StH3>WELCOME GAMER!</StH3>
                <StP>Your competitions, your rules <br/>
                    All tournaments in one place <br/>
                    Choose how you can view your results. Create your own events<br/>
                    Whether you run grassroots tournaments or professional leagues, Sluip Genius makes it all possible
                </StP>
                <Button size={'large'} onClick={()=>navigate(URL.TOURNAMENT_LIST)} variant="contained">START</Button>
            </StyledFirstPageText>
        </StyledFirstPage>
    );
};

export default FirstPages;