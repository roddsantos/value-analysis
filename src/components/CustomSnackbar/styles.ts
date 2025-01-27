import styled, { css } from 'styled-components';
import { Snackbar } from '@mui/material';

type SnackbarContainerType = {
  background?: string;
  accent?: string;
};

export const StyledSnackbar = styled(Snackbar)`
  width: 600px;
  & i {
    font-size: 32px;
    width: 10%;
    margin: auto;
  }
  & p {
    margin: 0px;
    font: normal 16px/33px Helvetica;
    width: 80%;
  }
`;

export const SnackbarContainer = styled.div<SnackbarContainerType>`
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${({ background, accent }) => css`
    background-color: ${background};
    border-left: 6px solid ${accent};
    color: ${accent};
  `}
`;
