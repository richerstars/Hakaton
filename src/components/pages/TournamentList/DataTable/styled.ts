import styled from 'styled-components';

export const StThead = styled.thead`
  display: table-header-group;
  background: #fafafa;
  text-transform: uppercase;
  font-weight: bold;
`;

export const StTr = styled.tr`
    border: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 5px;
    margin-bottom: 0;
    height: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr minmax(210px,1fr) minmax(210px,1fr) 150px 180px 1fr 1fr 110px 140px;
    align-items: center;
    &:nth-child(even) {
        background: #fafafa;
    }
`;

export const StTh = styled.th`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  font-size: 15px;
  text-align: left;
`;

export const StTd = styled.td`
  padding: 10px;
  text-align: left;
  display: table-cell;
  text-align: left;
  font-size: 14px;
  border-bottom: none;
  &:last-child {
    border-bottom: none;
  }
`;

export const StTable = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const StButton= styled.button`
  width: 90px;
  padding: 3px;
  border-radius: 5px;
  background-color: #ddd;
`;
