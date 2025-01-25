import { TextField } from '@mui/material';
import styled, { css } from 'styled-components';

type StyledTextfieldType = {
  width?: number | string;
};

export const StyledContainer = styled.section`
  width: 100%;
  margin: 26.5px 0px 23.45px;
  & p {
    font: normal 14px Helvetica;
  }
`;

export const StyledTextfield = styled(TextField)<StyledTextfieldType>`
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  display: flex;
  justify-content: space-between;
  ${({ width }) => css`
    width: ${width
      ? typeof width === 'string'
        ? width
        : width + 'px'
      : '100%'};
  `}
  &.MuiFormControl-root.MuiTextField-root {
    margin: 0px 13.59px 11.5px 0px;
    & .MuiInputBase-root.MuiOutlinedInput-root {
      min-height: 51px;
      padding: 0px 0px 0px 14px;
      input {
        padding: 14.5px 14px 14.5px 0px;
      }
      & .MuiInputBase-input.Mui-disabled {
        font: normal normal normal 14px/16px Helvetica;
        -webkit-text-fill-color: #000000;
        &.MuiInputBase-inputMultiline {
          padding-right: 14px;
        }
      }
    }
  }
`;

export const StyledStartAdornment = styled.p`
  margin-right: 9.93px;
  color: #707070;
  font: normal 14px/16px Helvetica;
  width: max-content;
`;

export const ButtonsContainer = styled.div`
  padding: 0px 26px 40px;
  button + button {
    margin-left: 18px;
  }
`;
