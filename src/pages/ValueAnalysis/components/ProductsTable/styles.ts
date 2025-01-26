import styled, { css } from 'styled-components';

type CustomHeaderType = {
  left?: boolean;
  right?: boolean;
};

export const CustomHeader = styled.div<CustomHeaderType>`
  ${({ left, right }) => css`
    border-radius: ${left ? '4px' : '0px'} ${right ? '4px' : '0px'}
      ${right ? '4px' : '0px'} ${left ? '4px' : '0px'};
  `}
  font: normal normal medium 12px/14px Helvetica Neue !important;
  background-color: var(--secondary);
  padding: 10px;
  color: #ffffff;
  width: 300px;
`;

export const CustomRow = styled.div`
  background-color: transparent;
  color: #000000;
  height: 37.21px !important;
  display: block;
  margin-top: 8px;
  align-items: center;
  padding: 0px 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
