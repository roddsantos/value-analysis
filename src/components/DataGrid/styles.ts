import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

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
    width: 100%;
    padding: 0px !important;
  }
`;

export const StyledDivisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  margin-bottom: 20.5px;
`;
