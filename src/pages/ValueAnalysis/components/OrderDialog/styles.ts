import styled from 'styled-components';

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
