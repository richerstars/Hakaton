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

// const linksToTournament = [
//     {
//         id: 1,
//         url: '/openTournament',
//         title: 'Open',
//     },
//     {
//         id: 2,
//         url: '/activeTournament',
//         title: 'Active',
//     },
//     {
//         id: 3,
//         url: '/finishedTournament',
//         title: 'Finished',
//     }
// ];

const linksToCup = [
    {
        id: 1,
        url: '/openCap',
        title: 'Open',
    },
    {
        id: 2,
        url: '/activeCap',
        title: 'Active',
    },
    {
        id: 3,
        url: '/finishedCap',
        title: 'Finished',
    }
];

const HeaderPages = ({text, link}: IHeader) => {
    // @ts-ignore
    const {setLinks} = React.useContext(NavigateContext);
    const handleClick = () => setLinks(linksToCup);
    return(
        <StyledHeader>
            <NavBar/>
            <Logo/>
            <StWrapperMode>
                <Button variant="contained" onClick={handleClick}>Mode</Button>
            </StWrapperMode>
            <Paragraph text={text} link={link} />
        </StyledHeader>
    );
};

export default HeaderPages;