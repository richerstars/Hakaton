import React from 'react';
import {StCell} from './styled';

type TProps = {
    title: string
};

const Cell: React.FC<TProps> = ({title}) =>  (
    <StCell >
        {title}
    </StCell>
);

export default Cell;