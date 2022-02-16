import React from 'react';
import {Outlet} from 'react-router-dom';
import {StMain, StNavInputWrapper, StPageWrapper} from './styled';
import HeaderPages from "../common/HeaderPages/HeaderPages";
import NavBar from "../common/NavBar/NavBar";

const LayoutPages = ({toggleTheme,theme}:any) => {
    return (
        <>
            <HeaderPages toggleTheme={toggleTheme} theme={theme}/>
            <StPageWrapper theme={theme}>
                <StNavInputWrapper>
                    <NavBar/>
                </StNavInputWrapper>
                <StMain>
                    <Outlet/>
                </StMain>
            </StPageWrapper>
        </>
    );
};

export default LayoutPages;
