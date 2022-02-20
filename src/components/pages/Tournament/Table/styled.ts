import styled from "styled-components";

export const StRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const StCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 5px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.87);
  border-bottom: 1px solid rgba(255, 255, 255, 0.87);
  background-color: rgba(255,255,255,0.2);
  font-size: 20px;
  color: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
