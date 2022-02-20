
import React from 'react';
import Cell from './Cell';
import {StRow} from './styled';
const header = ['login','score', 'games', 'wins'];

const Header = () => (
    <StRow>
        { header.map((el, index) =>  <Cell title={el} key={index}/> ) }
    </StRow>
);

export default Header;