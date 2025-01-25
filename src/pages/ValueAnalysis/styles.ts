import { Snackbar } from '@mui/material';
import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  button + button {
    margin-left: 18px;
  }
  width: max-content;
  margin: 26px 0px 0px auto;
`;

export const StyledTitle = styled.h1`
  margin-left: 42px;
  margin-bottom: 16.5px;
`;

export const StyledDivisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  margin-bottom: 20.5px;
`;

export const StyledDialogText = styled.p`
  font: bold 17px Helvetica;
  color: #707070;
  width: 700px;
  margin: 44.5px auto 45.7px;
  text-align: center;
`;

export const DialogButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto 50px;
  width: auto;
  button + button {
    margin-left: 18px;
  }
`;

export const StyledSnackbar = styled(Snackbar)`
  width: 600px;
  background-color: #e8f7f0;
  color: #53a77f;
  border-left: 6px solid #53a77f;
  padding: 20px;
  border-radius: 10px;
  & div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
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
