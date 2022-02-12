import styled from 'styled-components';
import {COLORS} from "../../constants/colors";

export const StyledFirstPage = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100vh;
`;

export const StLogo = styled.div`
  margin: 0 auto;
  text-align: center;
    `;

export const StyledFirstPageText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #000000;
  border-radius: 5px;
  padding: 25px;
  margin: 10px auto;
  max-width: calc(100vw - 496px);
  & h3 {
    margin: 10px;
    text-align: center;
  }
  & p{
    padding: 15px;
    line-height: 1.5;
    text-align: justify;
  }
`;

export const StyledSignIn = styled.div`
  text-align: center;
& a{
    color: ${COLORS.SEMI_PRIMARY_COLOR_SEC};
    text-decoration: none;
    border: 1px solid ${COLORS.SEMI_PRIMARY_COLOR_SEC};
    border-radius: 2px;
    padding: 5px 15px;
    transition: all .4s ease-out;

}
& a:hover{
    color: ${COLORS.HOVER_COLOR_PARAGRAPH};
    border: 1px solid ${COLORS.HOVER_COLOR_PARAGRAPH};
}
`;
