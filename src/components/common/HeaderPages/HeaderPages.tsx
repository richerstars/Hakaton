import React from 'react';
import Logo from '../Logo/Logo';
import {StWrapperLink, StyledHeader} from './styled';
import Button from '@mui/material/Button';
import {StSlash, StTools, StWrapperLang} from "./styled";
import {useNavigate} from "react-router-dom";
import {URL} from "../../../constants/url";
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from '../Toggler/styled';
import FormGroup from '@mui/material/FormGroup';

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
                <FormGroup>
                    <FormControlLabel
                        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                        label="Theme" onClick={toggleTheme}/>
                </FormGroup>
            </StTools>
        </StyledHeader>
    );
};

export default HeaderPages;