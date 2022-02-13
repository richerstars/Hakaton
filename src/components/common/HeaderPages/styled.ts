import styled from 'styled-components';
import {COLORS} from "../../../constants/colors";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  //max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  height: 144px;
  background: linear-gradient(180deg, ${COLORS.TOP_LINEAR} 3.43%, ${COLORS.BOTTOM_LINEAR} 58.35%);
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
  font-size: 40px;
`;

export const StSlash = styled.div`
  width: 30px;
  text-align: center;
`;