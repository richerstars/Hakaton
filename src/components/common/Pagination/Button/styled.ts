import styled from 'styled-components';

export const StButton = styled.button`
  float: left;
  padding: 8px 16px;
  font-size: 25px;
  text-decoration: none;
  border: 1px solid white;
  color: white;
  background-color: black;
  &:active {
    background-color: white ;
    border: 1px solid white;
    color: black;
  };
  &:hover:not(.active) {
    background-color: grey ;
    cursor: pointer;
  };
  &:first-child{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  };
  &:last-child{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  };
  &:disabled {
    color: rgb(94 92 92);
    border-color: rgb(94 92 92);
  };
  &:disabled:hover {
    cursor: default;
    background-color: black;
  };
`;
