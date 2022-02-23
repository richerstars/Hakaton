
import React from 'react';
import Cell from './Cell';
import {StRow} from "./styled";

type TProps = {
    player : string[],
    theme: string
};

const Row:React.FC<TProps> = ({player, theme}) => (
    <StRow>
        {
            Object.values(player).map((objItem, index) =>
                <Cell theme={theme} title={objItem} key={index}/>
            )
        }
    </StRow>
);

export default Row;