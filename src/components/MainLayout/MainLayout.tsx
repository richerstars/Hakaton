import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header/Header';
import {StMain, StWrapper} from './styled';

const MainLayout = () => {
    return (
        <StWrapper>
            <Header/>
            <StMain>
                <Outlet/>
            </StMain>
        </StWrapper>
    );
};

export default MainLayout;
