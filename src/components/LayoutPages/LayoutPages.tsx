import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { getNextRoute } from '../../helpers/routes';
import {StMain, StPageWrapper} from './styled';
import HeaderPages from "../common/HeaderPages/HeaderPages";
import NavBar from "../common/NavBar/NavBar";

const LayoutPages = () => {
    const { link, content } = getNextRoute(useLocation().pathname);
    return (
        <>
            <HeaderPages text={content} link={link}/>
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
