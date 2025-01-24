import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
  height: fit-content;
  margin-top: 64px;
  margin-left: 66px;
  width: calc(100% - 66px);
`;

export const Content = styled.div`
  margin-top: 17.62px;
  width: 1396px;
  @media screen and (max-width: 1455px) {
    width: 100%;
    padding: 0px 30px 0px 70px;
  }
`;
