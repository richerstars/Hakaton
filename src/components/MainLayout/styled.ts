import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const StWrapper = styled.div`
  //&:first-child{
  //  background: linear-gradient(180deg, rgba(68, 50, 179, 0.8) 3.43%, rgba(187, 42, 223, 0.64) 58.35%);
  //}
`;

// eslint-disable-next-line no-undef
export const StMain = styled.main`
  min-height: calc(100vh - 144px);
  display: grid;
  place-items: center;
  background-color:${({theme}) => theme === 'light' ? `${COLORS.WHITE}`: `${COLORS.BACKGROUND_MAIN_DARK}`};
  box-shadow: inset 0px 2px 10px 1px ${COLORS.SHADOW_HEAD};
`;
