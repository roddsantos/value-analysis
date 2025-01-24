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

export const StyledSectionDescription = styled.p`
  font: normal normal normal 12px/14px Helvetica;
  color: #939393;
  margin: 0px 0px 26.38px 39px;
`;

export const StyledSectionTitle = styled.h3`
  color: #939393;
  margin: 0px 0px 7.62px 26px;
`;

export const CustomHeader = styled.div<CustomHeaderType>`
  ${({ left, right }) => css`
    border-radius: ${left ? '4px' : '0px'} ${right ? '4px' : '0px'}
      ${right ? '4px' : '0px'} ${left ? '4px' : '0px'};
  `}
  font: normal normal medium 12px/14px Helvetica Neue !important;
  background-color: #606062;
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
  &.MuiDataGrid-root {
    height: auto !important;
    overflow-y: hidden;
  }
  & .MuiDataGrid-virtualScrollerRenderZone {
    overflow-y: hidden !important;
    width: 100% !important;
  }
  & .MuiDataGrid-scrollbar,
  .MuiDataGrid-cellEmpty,
  .MuiDataGrid-scrollbarFiller,
  .MuiDataGrid-filler {
    display: none !important;
  }
  & .MuiDataGrid-columnHeader {
    padding: 0px !important;
    height: 42px !important;
  }
  & .MuiDataGrid-row {
    max-height: 37.21px !important;
    min-height: 37.21px !important;
    width: 100% !important;
  }
  & .MuiDataGrid-cell {
    max-height: 37.21px !important;
    min-height: 37.21px !important;
  }
`;
