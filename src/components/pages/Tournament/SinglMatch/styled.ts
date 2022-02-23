import styled from "styled-components";

type TTheme = {
    theme: string
}

export const StRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StCardInfo = styled.div`
 display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StCard = styled.div<TTheme>`
 display: flex;
  justify-content: space-between;
 border: 1px solid ${({theme}) => theme === 'dark' ? '#fff' : '#000'};
  padding: 10px;
  border-radius: 10px;
  gap: 20px;
  max-width: 410px;
`;

export const StInput = styled.input<TTheme>`
  width: 65px;
  color:  ${({theme}) => theme === 'dark' ? '#fff' : '#000'};
  background: transparent;
  font-size: 20px;
  height: 50px;
  align-items: center;
  text-align: center;
`;
