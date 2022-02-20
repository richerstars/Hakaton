
import React from 'react';
import Cell from './Cell';
import {StRow} from "./styled";

type TProps = {
    player : string[]
};

const Row:React.FC<TProps> = ({player}) => (
    <StRow>
        {
            Object.values(player).map((objItem, index) =>
                <Cell title={objItem} key={index}/>
            )
        }
    </StRow>
);

export default Row;