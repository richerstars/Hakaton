import React from 'react';
import Button from './Button/Button';
import {StDiv} from "./styled";

const arrayButtons = [ `<`, 1, 2, 3, 4, `>`];

type TProps = {
    currentPage: any,
    switchPage: (page: number) => void
}

const Pagination: React.FC<TProps> = ({ switchPage, currentPage }) => (
    <StDiv>
        {arrayButtons.map((element) => <Button key={element} contentKey={element} switchPage={switchPage} currentPage={currentPage}/>)}
    </StDiv>
);

export default Pagination;

