import styled from 'styled-components';
import {COLORS} from "../../constants/colors";

export const StPageWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
  gap: 30px;
  background-color:${COLORS.BACKGROUND_MAIN}
`;

export const StMain = styled.main`
  min-height: calc(100vh - 144px);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
`;

