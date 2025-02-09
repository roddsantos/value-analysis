import { TextField } from '@mui/material';
import styled, { css } from 'styled-components';

type StyledTextfieldType = {
  width: number;
};

export const StyledContainer = styled.section`
  width: 100%;
  margin: 0px 0px 23.45px 17px;
  div + div {
    margin-left: 18px;
    color: #707070;
  }
`;

export const StyledTextfield = styled(TextField)<StyledTextfieldType>`
  ${({ width }) => css`
    width: ${width + 'px'};
  `}
  &.MuiFormControl-root.MuiTextField-root {
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
`;
