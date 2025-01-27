import styled, { css } from 'styled-components';

type CustomHeaderType = {
  left?: boolean;
  right?: boolean;
};

type CustomRowType = {
  selected?: boolean;
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

export const CustomRow = styled.div<CustomRowType>`
  color: #000000;
  height: 37.21px !important;
  width: 100%;
  align-items: center;
  padding: 0px 10px;
  ${({ selected }) => css`
    background-color: ${selected ? '#189fe366' : 'transparent'};
  `}
  display: grid;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
`;
