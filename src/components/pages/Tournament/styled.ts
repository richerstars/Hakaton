import styled from 'styled-components';

type TTheme= {
    theme: string
}

export const StP = styled.div`
    font-size: 30px;
`;
export const StMatches = styled.div`
  margin-top: 50px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const StTournamentWrapper = styled.div<TTheme>`
  width: 80%;
  color: ${({theme}) => theme === 'dark' ? '#fff' : '#000'};
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-wrap: break-word;
  h1 {
    text-align: center;
  }
`;

export const StTable = styled.div`
  margin-top: 80px;
`;
