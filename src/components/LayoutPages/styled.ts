import styled from 'styled-components';
import {COLORS} from "../../constants/colors";

export const StPageWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
  gap: 30px;
  background-color:${({theme}) => theme === 'light' ? `${COLORS.BACKGROUND_MAIN}`: `${COLORS.BACKGROUND_MAIN_DARK}`};
`;

export const StMain = styled.main`
  min-height: calc(100vh - 144px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const StNavInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
