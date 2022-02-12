import styled from 'styled-components';
import {COLORS} from "../../../constants/colors";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  height: 144px;
`;

export const StWrapperMode = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const StLabel = styled.label`
  color: ${COLORS.WHITE};
  font-size: 20px;
`;
