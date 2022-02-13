import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {links} from "../../../constants/linksForNav";

const NavBar = () => {
    const { pathname } = useLocation();
    return (
        <Box sx={{display: 'flex', '& > *': {m: 1,},}}>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
            >
                {links.map(({ id, url, title }) => {
                    return (
                        // <Button key={id} variant={url === pathname ? "contained" : "outlined"}>
                        <Button key={id} disabled={url === pathname} size={'large'}>
                            <NavLink key={id} to={url}>
                                {title}
                            </NavLink>
                        </Button>
                    );
                })}
            </ButtonGroup>
        </Box>
    );
};

export default NavBar;
