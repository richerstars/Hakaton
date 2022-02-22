import React from 'react';
import './Button.scss';

const Button = ({
    currentPage,
    switchPage,
    contentKey,
}) => {
    const isDisabled = contentKey === `<` && currentPage === 1 || contentKey === `>` && currentPage === 5;
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
        <button
            className={currentPage === contentKey ? "active" : ""}
            onClick = {switchPageHandler}
            disabled = {isDisabled}
        >
            {contentKey}
        </button>
    );
};

export default Button;
