import styled from 'styled-components';

export const StyledDrawer = styled.nav`
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 66px;
  min-height: calc(100vh - 64px);
  background-color: var(--secondary);
  position: fixed;
  left: 0px;
`;

export const StyledIcon = styled.i`
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffffff;
  margin: 36px auto 0px;
`;

export const StyledImage = styled.img`
  width: 1.5rem;
  margin: 36px auto 0px;
  cursor: pointer;
`;
