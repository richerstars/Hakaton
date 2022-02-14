import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header/Header';
import {StMain, StWrapper} from './styled';

const MainLayout = ({toggleTheme,theme}:any) => {
    return (
        <StWrapper>
            <Header toggleTheme={toggleTheme} theme={theme}/>
            <StMain theme={theme}>
                <Outlet/>
            </StMain>
        </StWrapper>
    );
};

export default MainLayout;
