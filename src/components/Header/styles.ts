import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 64px;
  background-color: #fbfbfb;
`;

export const StyledImage = styled.img`
  width: 130px;
  margin-left: 20px;
  cursor: pointer;
`;

export const StyledIcon = styled.i`
  font-size: 24px;
  cursor: pointer;
`;

export const StyledUserLabel = styled.p`
  font: normal 1.25rem Roboto;
  color: #000000;
  margin: auto 44px auto 27px;
  cursor: pointer;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto 80px auto auto;
`;
