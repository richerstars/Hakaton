import styled from 'styled-components';
import {COLORS} from "../../constants/colors";

export const StyledFirstPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.PRIMARY_COLOR_LIGHT};
  box-shadow: 0px 1px 20px 9px ${COLORS.SHADOW_MAIN};
  border-radius: 15px;
  color: #ffffff;
`;

export const StyledFirstPageText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 25px;
  margin: 10px;
  max-width: 900px;
  & h3 {
    margin: 10px;
    text-align: center;
  }
  & p{
    padding: 15px;
    line-height: 2.5;
    text-align: center;
  }
`;

export const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px 40px;
  height: 40px;
  font-size: 40px;
  border: none;
  background-color: ${COLORS.PRIMARY_COLOR};
  border-radius: 5px;
  ;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  box-shadow: 10px 10px 10px -10px ${COLORS.SHADOW};
  & a{
    color: ${COLORS.WHITE};
    text-decoration: none;
  }
  
  &:hover {
    background-color: ${COLORS.SEMI_PRIMARY_COLOR_SEC};
  }
`;

export const StH3 = styled.h3`
  font-size: 30px;
`;

export const StP = styled.p`
  font-size: 25px;
`;
