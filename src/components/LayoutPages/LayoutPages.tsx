import React from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import {StMain, StNavInputWrapper, StPageWrapper} from './styled';
import HeaderPages from "../common/HeaderPages/HeaderPages";
import NavBar from "../common/NavBar/NavBar";
import TextField from '@mui/material/TextField';


const LayoutPages = ({toggleTheme,theme}:any) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            navigate(`/tournament/${e.target.value}`);
        }
    };
    return (
        <>
            <HeaderPages toggleTheme={toggleTheme} theme={theme}/>
            <StPageWrapper theme={theme}>
                <StNavInputWrapper>
                    <NavBar/>
                    {pathname==='/tournamentList'&&
                        <TextField
                            onKeyDown={handleKeyDown}
                            id="outlined-basic"
                            label="Enter id of tournament"
                            variant="outlined"
                            type='number'/>}
                </StNavInputWrapper>
                <StMain>
                    <Outlet/>
                </StMain>
            </StPageWrapper>
        </>
    );
};

export default LayoutPages;
