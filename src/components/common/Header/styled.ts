import styled from 'styled-components';
import {COLORS} from "../../../constants/colors";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  //max-width: 800px;
  margin: 0 auto;
  //padding: 20px 0;
  height: 144px;
  position: relative;
  background-color: ${({ theme }) => theme === 'light'
        ? `radial-gradient(${COLORS.WHITE}, ${COLORS.SHADOW_HEAD})`
        : `${COLORS.BACKGROUND_MAIN_DARK}`};
  box-shadow: inset 6px 5px 100px 20px ${COLORS.SHADOW_HEAD};
`;

export const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child{
    padding-right: 50px;
  }
`;

export const StWrapperLang = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.WHITE};
  min-width: 120px;
  font-size: 30px;
`;

export const StSlash = styled.div`
  width: 30px;
  text-align: center;
`;

export const StTools = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

