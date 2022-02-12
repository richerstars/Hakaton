import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { getNextRoute } from '../../helpers/routes';
import { StMain } from './styled';
import HeaderPages from "../common/HeaderPages/HeaderPages";

const LayoutPages = () => {
    const { link, content } = getNextRoute(useLocation().pathname);
    return (
        <>
            <HeaderPages text={content} link={link}/>
            <StMain>
                <Outlet/>
            </StMain>
        </>
    );
};

export default LayoutPages;
