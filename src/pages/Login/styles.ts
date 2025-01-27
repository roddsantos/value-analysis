import { TextField } from '@mui/material';
import styled from 'styled-components';

export const CustomContainer = styled.div`
  width: 100vw;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1367) {
    flex-direction: column;
  }
`;

export const StyledChainImage = styled.img`
  height: 100vh;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const StyledKodigosImage = styled.img`
  width: 350px;
  margin-bottom: 56px;
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

export const StyledLoginInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const StyledEndAdornment = styled.i`
  margin-right: 9.93px;
  color: #707070;
  font: normal 28px Helvetica;
`;

export const StyledTextField = styled(TextField)`
  width: 281px;
  &.MuiTextField-root {
    margin-top: 8px;
  }
`;
