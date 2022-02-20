import styled from "styled-components";

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

export const StCard = styled.div`
 display: flex;
  justify-content: space-between;
 border: 1px solid #000;
  padding: 10px;
  border-radius: 10px;
`;

export const StInput = styled.input`
  width: 65px;
  background: transparent;
  font-size: 20px;
  height: 50px;
  align-items: center;
  text-align: center;
`;
