import styled from 'styled-components';
import {COLORS} from "../../constants/colors";

export const StyledFirstPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(39, 39, 39, 0.67);
  border-radius: 5px;
  color: #ffffff;
`;

export const StyledFirstPageText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 25px;
  margin: 10px auto;
  max-width: calc(100vw - 496px);
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
  padding: 10px;
  height: 40px
  font-size: 18px;
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
