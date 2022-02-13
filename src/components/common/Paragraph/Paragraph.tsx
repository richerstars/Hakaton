import React from 'react';
import {Link} from 'react-router-dom';
import { IHeader } from '../Header/Header';
import Button from '@mui/material/Button';

const Paragraph = ({text, link}: IHeader) => (
    // <StyledParagraph>
    <Button size={'large'} variant={"contained"}>
        <Link to={link}>
            {text}
        </Link>
    </Button>

    // </StyledParagraph>
);


export default Paragraph;
