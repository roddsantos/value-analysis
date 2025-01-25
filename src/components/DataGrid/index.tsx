import React from 'react';
import { DataGridProps, GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import * as S from './styles';

interface CustomDataGridType extends DataGridProps {
  columns: readonly GridColDef<GridValidRowModel>[];
}

export const CustomDataGrid = ({ ...props }: CustomDataGridType) => {
  return (
    <React.Fragment>
      <S.StyledDataGrid
        disableColumnSorting
        disableColumnMenu
        disableColumnResize
        hideFooter
        getRowHeight={() => 'auto'}
        sx={{
          width: '100%',
          '& .hideRightSeparator > .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
        }}
        {...props}
      />
      <S.StyledDivisor />
    </React.Fragment>
  );
};
