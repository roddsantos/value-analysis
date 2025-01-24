import { DataGrid } from '@mui/x-data-grid';
import styled, { css } from 'styled-components';

type CustomHeaderType = {
  left?: boolean;
  right?: boolean;
};

export const StyledDivisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  margin-bottom: 20.5px;
`;

export const CustomHeader = styled.div<CustomHeaderType>`
  ${({ left, right }) => css`
    border-radius: ${left ? '4px' : '0px'} ${right ? '4px' : '0px'}
      ${right ? '4px' : '0px'} ${left ? '4px' : '0px'};
  `}
  font: normal normal medium 12px/14px Helvetica Neue !important;
  background-color: var(--secondary);
  padding: 10px;
  color: #ffffff;
  width: 200px;
`;

export const CustomRow = styled.div`
  background-color: transparent;
  color: #000000;
  max-height: 37.21px !important;
  min-height: 37.21px !important;
  display: flex;
  align-items: center;
`;

export const StyledDataGrid = styled(DataGrid)`
  height: auto !important;
  &.MuiDataGrid-root {
    height: auto !important;
    overflow-y: hidden;
    border-color: var(--secondary);
    border: none;
  }
  & .MuiDataGrid-virtualScrollerRenderZone {
    overflow-y: hidden !important;
    width: 100% !important;
  }
  & .MuiDataGrid-scrollbar,
  .MuiDataGrid-cellEmpty,
  .MuiDataGrid-scrollbarFiller,
  .MuiDataGrid-filler {
    display: none;
  }
  & .MuiDataGrid-columnHeader {
    padding: 0px !important;
    height: 42px !important;
  }
  & .MuiDataGrid-row {
    height: 37.21px;
    width: 100%;
  }
  & .MuiDataGrid-cell {
    height: 37.21px;
  }
`;
