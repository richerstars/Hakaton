import styled from 'styled-components';
import { COLORS } from "../../../constants/colors";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  //max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  height: 144px;
  background-color: ${({ theme }) => theme === 'light'
        ? `radial-gradient(${COLORS.WHITE}, ${COLORS.SHADOW_HEAD})`
        : `${COLORS.BACKGROUND_MAIN_DARK}`};
  box-shadow: inset 6px 5px 100px 20px ${COLORS.SHADOW_HEAD};
`;

export const StWrapperMode = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const StWrapperLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StTools = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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