import React from "react";
import {StyledFirstPage, StLogo, StyledSignIn, StyledFirstPageText} from "./styled";
import {Link} from "react-router-dom";
import {URL} from "../../constants/url";
import Logo from "../common/Logo/Logo";
// import Header from '../common/Header/Header';


const FirstPages = () => {
    return (
        <StyledFirstPage>
            {/*<Header text="Login" link="link"/>*/}
            <StLogo>
                <Logo/>
            </StLogo>
            <StyledFirstPageText>
                <h3>WELCOME GAMER!</h3>
                <p>Simplify tournament management <br/>Join the millions
                    of users who already trust Sluip Genius to manage their tournaments.<br/>
                    Already more than 28,883,127 tournament grids have been created worldwide.</p>
                <StyledSignIn>
                    <Link to={URL.MAIN_PAGE}>To begin</Link>
                </StyledSignIn>
            </StyledFirstPageText>
        </StyledFirstPage>
    );
};

export default FirstPages;