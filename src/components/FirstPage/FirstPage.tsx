import React from "react";
import {StyledFirstPage, StyledSignIn, StyledFirstPageText} from "./styled";
import {Link} from "react-router-dom";
import {URL} from "../../constants/url";
// import Header from '../common/Header/Header';


const FirstPages = () => {
    return (
        <StyledFirstPage>
            {/*<Header text="Login" link="link"/>*/}
            <StyledFirstPageText>
                <h3>WELCOME GAMER!</h3>
                <p>Your competitions, your rules <br/>
                    All tournaments in one place <br/>
                    Choose how you can view your results. Create your own events<br/>
                    Whether you run grassroots tournaments or professional leagues, Sluip Genius makes it all possible
                </p>
                <StyledSignIn>
                    <Link to={URL.MAIN_PAGE}>TO BEGIN</Link>
                </StyledSignIn>
            </StyledFirstPageText>
        </StyledFirstPage>
    );
};

export default FirstPages;