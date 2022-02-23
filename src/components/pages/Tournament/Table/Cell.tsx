import React from 'react';
import {StCell} from './styled';

type TProps = {
    title: string,
    theme: string
};

const Cell: React.FC<TProps> = ({title,theme}) =>  (
    <StCell theme={theme}>
        {title}
    </StCell>
);

export default Cell;