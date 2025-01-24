import { Button } from '@mui/material';
import styled, { css } from 'styled-components';

type ButtonType = {
  types?: 'primary' | 'secondary' | 'third';
};

export const ButtonContainer = styled(Button)<ButtonType>`
  &.MuiButtonBase-root {
    ${({ types }) => css`
      background-color: ${types !== 'primary'
        ? 'transparent'
        : 'var(--primary)'} !important;
      color: ${types === 'primary'
        ? '#F7F7F7'
        : types === 'secondary'
          ? '#707070'
          : '#189FE3'} !important;
      border-color: ${types === 'primary'
        ? '#189FE3'
        : types === 'secondary'
          ? '#707070'
          : '#4E9DDD'};
    `}
    padding: 12.5px;
    font: normal normal bold 0.8125rem Helvetica;
    border-radius: 3px;
    box-shadow: none;
    border-style: solid;
    border-width: 1px;
    text-transform: none;
    height: 39px;
    min-width: 122px;
  }
`;
