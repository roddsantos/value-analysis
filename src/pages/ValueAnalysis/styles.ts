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
