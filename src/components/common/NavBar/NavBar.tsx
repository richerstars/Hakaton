import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {linkForAdmin, linkForUser} from "../../../constants/linksForNav";

const NavBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const links = (document.cookie === 'role=user') ? linkForUser: linkForAdmin;
    return (
        <Box sx={{ display: 'flex', '& > *': { m: 1, }, }}>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
            >
                { (document.cookie.length > 6) &&
                    (links.map(({ id, url, title }) => {
                        return (
                            <Button
                                key={id}
                                disabled={url === pathname}
                                size={'large'}
                                onClick={() => navigate(url)}
                            >
                                {title}
                            </Button>

                        );
                    }))
                }

            </ButtonGroup>
        </Box>
    );
};

export default NavBar;
