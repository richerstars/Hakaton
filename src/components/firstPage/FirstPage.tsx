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
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Animi assumenda beatae dolore doloribus ea illo
                    laboriosam magnam nam, praesentium quia quod, rem soluta,
                    sunt suscipit voluptatibus. Dolorem ducimus esse fugit ipsam
                    minima modi numquam soluta? At, aut dolore eligendi est illum
                    iure laudantium molestias natus necessitatibus nesciunt non
                    quidem vitae?
                    orem ipsum dolor sit amet, consectetur adipisicing
                    elit. Animi assumenda beatae dolore doloribus ea illo
                    laboriosam magnam nam, praesentium quia quod, rem soluta,
                    sunt suscipit voluptatibus. Dolorem ducimus esse fugit ipsam
                    minima modi numquam soluta? At, aut dolore eligendi est illum
                    iure laudantium molestias natus necessitatibus nesciunt non
                    orem ipsum dolor sit amet, consectetur adipisicing
                    elit. Animi assumenda beatae dolore doloribus ea illo
                    laboriosam magnam nam, praesentium quia quod, rem soluta,
                    sunt suscipit voluptatibus. Dolorem ducimus esse fugit ipsam
                    minima modi numquam soluta? At, aut dolore eligendi est illum
                    iure laudantium molestias natus necessitatibus nesciunt non</p>
                <StyledSignIn>
                    <Link to={URL.MAIN_PAGE}>To begin</Link>
                </StyledSignIn>
            </StyledFirstPageText>
        </StyledFirstPage>
    );
};

export default FirstPages;