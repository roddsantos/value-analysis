import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 100%;
  margin: 0px 0px 23.45px 0px;
`;

export const StyledFileContainer = styled.div`
  width: 100%;
  min-height: 64px;
  border-radius: 6px;
  border: 1px solid #cccccc;
`;

export const ButtonsContainer = styled.div`
  padding: 11.76px 30px;
  border-radius: 6px;
  background-color: #f7f7f7;
  button + button {
    margin-left: 18px;
  }
`;

export const FileContainer = styled.div`
  padding: 16px 36px;
`;

export const StyledInputFile = styled.input`
  display: none;
`;

export const StyledFileItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledFileIcon = styled.i`
  font-size: 32px;
  color: var(--secondary);
  width: 5%;
`;

export const StyledFileTitle = styled.p`
  font: normal 16px/18px Helvetica;
  width: 60%;
  color: #939393;
`;

export const StyledFileSize = styled.p`
  font: normal 16px/18px Helvetica;
  width: 30%;
  color: #939393;
`;

export const StyledFileRemoveIcon = styled.i`
  font-size: 28px;
  color: var(--primary);
  width: 5%;
  cursor: pointer;
`;
