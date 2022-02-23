
import React from 'react';
import Cell from './Cell';
import {StRow} from './styled';
const header = ['login','score', 'games', 'wins'];

type TProps = {
    theme: string
};

const Header = ({theme}: TProps) => (
    <StRow>
        { header.map((el, index) =>  <Cell theme={theme} title={el} key={index}/> ) }
    </StRow>
);

export default Header;