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
