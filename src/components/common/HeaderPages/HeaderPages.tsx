import React from 'react';
import Logo from '../Logo/Logo';
import {StWrapperMode, StyledHeader} from './styled';
import Paragraph from '../Paragraph/Paragraph';
import NavBar from "../NavBar/NavBar";
import Button from '@mui/material/Button';
import {NavigateContext} from "../../../context/NavigateContext";

export interface IHeader {
    text: string,
    link: string,
}

const HeaderPages = ({text, link}: IHeader) => {

    const { handleChangeMode } = React.useContext(NavigateContext);
    return(
        <StyledHeader>
            <NavBar/>
            <Logo/>
            <StWrapperMode>
                <Button variant="contained" onClick={handleChangeMode}>Mode</Button>
            </StWrapperMode>
            <Paragraph text={text} link={link} />
        </StyledHeader>
    );
};

export default HeaderPages;