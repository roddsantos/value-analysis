import styled, { css } from 'styled-components';
import { VariantSnackbar } from '.';
import { Snackbar } from '@mui/material';

type SnackbarContainerType = {
  variant?: VariantSnackbar;
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
  ${({ variant }) => css`
    background-color: ${variant === 'success'
      ? '#e8f7f0'
      : variant === 'error'
        ? '#f7e8e8'
        : '#b4b4b4'};
    border-left: 6px solid
      ${variant === 'success'
        ? '#53a77f'
        : variant === 'error'
          ? '#a75353'
          : '#474747'};
    color: ${variant === 'success'
      ? '#53a77f'
      : variant === 'error'
        ? '#a75353'
        : '#474747'};
  `}
`;
