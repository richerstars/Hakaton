import React from 'react';
import Logo from '../Logo/Logo';
import {StWrapperLink, StyledHeader} from './styled';
import Button from '@mui/material/Button';
import {StSlash, StTools, StWrapperLang} from "./styled";
import {useNavigate} from "react-router-dom";
import {URL} from "../../../constants/url";

export interface IHeader {
    text: string,
    link: string,
}

const HeaderPages = ({toggleTheme,theme}:any) => {
    const navigate = useNavigate();
    const handleLogIn = () => navigate(URL.SIGN_IN);
    const handleSignIn = () => navigate(URL.SIGN_UP);
    const handleLogOut = () => {
        window.document.cookie = `role=`;
        navigate(URL.DEFAULT_PAGE);
    };
    return(
        <StyledHeader theme={theme}>
            <Logo/>
            <StWrapperLink>
                {(document.cookie.length > 6)
                    ?<Button size={'large'} onClick={handleLogOut} variant="contained">LOG OUT</Button>
                    :<>
                        <Button size={'large'} onClick={handleLogIn} variant="contained">LOG IN</Button>
                        <Button size={'large'} onClick={handleSignIn} variant="contained">SIGN UP</Button>
                    </>
                }
            </StWrapperLink>
            <StTools>
                <StWrapperLang>
                    <div>EN</div>
                    <StSlash>|</StSlash>
                    <div>RU</div>
                </StWrapperLang>
                <Button size={'large'} variant={"contained"} onClick={toggleTheme}>Change theme</Button>
            </StTools>
        </StyledHeader>
    );
};

export default HeaderPages;