import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {StNav} from "./style";
import {NavigateContext} from "../../../context/NavigateContext";

const NavBar = () => {
    const {links} = React.useContext(NavigateContext);
    const { pathname } = useLocation();
    return (
        <StNav>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {links.map(({ id, url, title }) => {
                    return (
                        <Button key={id} variant={url === pathname ? "contained" : "outlined"}>
                            <NavLink key={id} to={url}>
                                {title}
                            </NavLink>
                        </Button>
                    );
                })}
            </ButtonGroup>
        </StNav>
    );};

export default NavBar;
