import React from 'react';
import Logo from '../Logo/Logo';
import {StSlash, StTools, StWrapper, StWrapperLang, StyledHeader} from './styled';
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {useLocation} from "react-router-dom";
import {URL} from "../../../constants/url";
import {TEXT_VALUES} from "../../../constants/textValues";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {MaterialUISwitch} from '../Toggler/styled';

export interface IHeader {
    text: string,
    link: string,
}

const Header = ({toggleTheme,theme}:any) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const handleNavigate = () => navigate(pathname ==='/signIn'? URL.SIGN_UP : URL.SIGN_IN);
    return <StyledHeader theme={theme}>
        <StWrapper>
            <Logo/>
            {pathname !== '/'&&
            <Button onClick={handleNavigate} size={'large'} variant={"contained"}>
                {pathname ==='/signIn'? TEXT_VALUES.SIGN_UP: TEXT_VALUES.LOG_IN}
            </Button>}
            <StTools>
                <StWrapperLang>
                    <div>EN</div>
                    <StSlash>|</StSlash>
                    <div>RU</div>
                </StWrapperLang>
                {/*<Button size={'large'} variant={"contained"} onClick={toggleTheme}>Change theme</Button>*/}
                <FormGroup>
                    <FormControlLabel
                        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                        label="Theme" onClick={toggleTheme}/>
                </FormGroup>
            </StTools>
        </StWrapper>
    </StyledHeader>;
};

export default Header;
