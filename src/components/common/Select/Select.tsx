import React from 'react';
import Select from 'react-select';
// @ts-ignore
import { ReactComponent as HelpIcon } from '../../../icons/help.svg';
import { StyledSelectWrapper } from './styled';
import { StIcon, StyledLabel, StInputItem, StError } from '../Input/styled';
import { COLORS } from '../../../constants/colors';

const Selection = ({ onChange, options, hintText, text, error }: any) => {
    const handleChange = (value: any) => onChange(value.label);

    const customTheme = (theme:any) => {
        return {...theme,
            colors: {
                ...theme.colors,
                primary25: `${COLORS.SEMI_PRIMARY_COLOR}`,
                primary: `${COLORS.PRIMARY_COLOR}`,
                neutral50: `${COLORS.BLACK}`,
                neutral0: `${COLORS.PRIMARY_COLOR_LIGHT}`,
            },
        };
    };

    return (
        <StyledSelectWrapper>
            <StyledLabel>{text}</StyledLabel>
            <StInputItem error={error}>
                <Select
                    className="test"
                    options={options}
                    onChange={handleChange}
                    theme={customTheme}
                />
                <StIcon>
                    <HelpIcon title={hintText || null}/>
                </StIcon>
                {error && <StError>{error}</StError>}
            </StInputItem>
        </StyledSelectWrapper>
    );
};

export default Selection;
