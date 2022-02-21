import React from 'react';
import {StButton} from "./styled";

type TProps = {
    currentPage: any,
    switchPage: (page: number) => void,
    contentKey: any
}

const Button: React.FC<TProps> = ({
    currentPage,
    switchPage,
    contentKey,
}) => {
    const isDisabled = contentKey === `<` && currentPage === 1 || contentKey === `>` && currentPage === 4 || currentPage === contentKey;
    const switchPageHandler = () => {
        if (isDisabled) return;
        let newPage = contentKey;
        if (contentKey === `<`) {
            newPage = currentPage - 1;
        }
        if (contentKey === `>`) {
            newPage = currentPage + 1;
        }
        switchPage(newPage);
    };
    return (
        <StButton
            onClick = {switchPageHandler}
            disabled = {isDisabled}
        >
            {contentKey}
        </StButton>
    );
};

export default Button;
