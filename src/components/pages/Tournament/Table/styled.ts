import styled from "styled-components";

export const StRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

type TTheme = {
    theme: string
}

export const StCell = styled.div<TTheme>`
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 5px;
  text-align: center;
  border-top: 1px solid ${({theme})=> theme === 'dark' ? '#FFFFFFDD' : '#000000DF'};
  border-bottom: 1px solid ${({theme})=> theme === 'dark' ? '#FFFFFFDD' : '#000000DF'};
  background-color: ${({theme})=> theme === 'dark' ? '#FFFFFF33' : '#ffffff80'};
  font-size: 20px;
  color: ${({theme})=> theme === 'dark' ? '#fff' : '#000'} ;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
