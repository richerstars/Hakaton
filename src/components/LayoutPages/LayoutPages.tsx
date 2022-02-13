import React from 'react';
import { Outlet } from 'react-router-dom';
import {StMain, StPageWrapper} from './styled';
import HeaderPages from "../common/HeaderPages/HeaderPages";
import NavBar from "../common/NavBar/NavBar";

const LayoutPages = () => {
    return (
        <>
            <HeaderPages />
            <StPageWrapper>
                <NavBar/>
                <StMain>
                    <Outlet/>
                </StMain>
            </StPageWrapper>
        </>
    );
};

export default LayoutPages;
