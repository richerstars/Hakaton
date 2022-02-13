import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from "../../../constants/url";
import { LogoImg } from './styled';
import logo from '../../../icons/logo.svg';


const Logo = () => {
    return (
        <Link to={URL.TOURNAMENT_LIST}>
            <LogoImg src={logo} alt="logo"/>
        </Link>
    );
};

export default Logo;
