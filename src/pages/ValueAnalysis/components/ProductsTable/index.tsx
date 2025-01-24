import { GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import { PRODUCTS } from 'utils/mocks/products';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { ProductsType } from 'types/products';
import { SectionTitle } from 'components/SectionTitle';

export const ProductsTable = () => {
  const [data, setData] = useState<ProductsType[]>([]);
  const columns: GridColDef[] = [
    {
      field: 'code',
      headerName: 'Código',
      editable: false,
      width: 100,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader left>Código</S.CustomHeader>,
      renderCell: (data) => <S.CustomRow>{data.value}</S.CustomRow>,
      headerClassName: 'hideRightSeparator',
    },
    {
      field: 'name',
      headerName: 'Produto',
      flex: 1,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader>Produto</S.CustomHeader>,
      renderCell: (data) => <S.CustomRow>{data.value}</S.CustomRow>,
      headerClassName: 'hideRightSeparator',
    },
    {
      field: 'description',
      headerName: 'Descrição',
      flex: 1,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader>Descrição</S.CustomHeader>,
      renderCell: (data) => <S.CustomRow>{data.value}</S.CustomRow>,
      headerClassName: 'hideRightSeparator',
    },
    {
      field: 'quantity',
      headerName: 'Quantidade',
      editable: false,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader>Quantidade</S.CustomHeader>,
      renderCell: (data) => <S.CustomRow>{data.value}</S.CustomRow>,
      headerClassName: 'hideRightSeparator',
      flex: 1,
    },
    {
      field: 'provider1',
      headerName: 'Fornecedor 1',
      type: 'number',
      editable: true,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader>Fornecedor 1</S.CustomHeader>,
      renderCell: (data) => <S.CustomRow>{data.value}</S.CustomRow>,
      headerClassName: 'hideRightSeparator',
      flex: 1,
    },
    {
      field: 'provider2',
      headerName: 'Fornecedor 2',
      type: 'number',
      editable: true,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader>Fornecedor 2</S.CustomHeader>,
      renderCell: (data) => <S.CustomRow>{data.value}</S.CustomRow>,
      headerClassName: 'hideRightSeparator',
      flex: 1,
    },
    {
      field: 'provider3',
      headerName: 'Fornecedor 3',
      type: 'number',
      editable: true,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader>Fornecedor 3</S.CustomHeader>,
      renderCell: (data) => <S.CustomRow>{data.value}</S.CustomRow>,
      headerClassName: 'hideRightSeparator',
      flex: 1,
    },
    {
      field: 'provider4',
      headerName: 'Fornecedor 4',
      type: 'number',
      editable: true,
      width: 180,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader right>Fornecedor 4</S.CustomHeader>,
      renderCell: (data) => <S.CustomRow>{data.value}</S.CustomRow>,
      headerClassName: 'hideRightSeparator',
      flex: 1,
    },
  ];

  useEffect(() => {
    setData(PRODUCTS);
  }, []);

  const processRowUpdate = (newRow: GridValidRowModel) => {
    setData((prevData) => {
      const newRows = [...prevData].map((row) => {
        if (row.id === (newRow as ProductsType).id)
          return newRow as ProductsType;
        return row;
      });
      return newRows;
    });
    return newRow as GridValidRowModel;
  };

  return (
    <section>
      <SectionTitle
        title="Editar Valores"
        description="Informe os valores repassados pelos fornecedores"
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <S.StyledDataGrid
          disableColumnSorting
          disableColumnMenu
          disableColumnResize
          hideFooter
          getRowHeight={() => 'auto'}
          rows={data}
          columns={columns}
          sx={{
            width: '100%',
            '& .hideRightSeparator > .MuiDataGrid-columnSeparator': {
              display: 'none',
            },
          }}
          processRowUpdate={processRowUpdate}
          onCellEditStop={(data) => console.log('DATA: ', data)}
        />
      </div>
      <S.StyledDivisor />
    </section>
  );
};
