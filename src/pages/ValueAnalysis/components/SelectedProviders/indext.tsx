import { SectionTitle } from 'components/SectionTitle';
import { ProductsType } from 'types/products';
import * as S from './styles';
import {
  GridCellParams,
  GridColDef,
  GridTreeNode,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { CustomDataGrid } from 'components/DataGrid';
import { Tooltip } from '@mui/material';

type ProductsTableType = {
  data: ProductsType[];
  setData: React.Dispatch<React.SetStateAction<ProductsType[]>>;
};

export const SelectedProviders = ({ data, setData }: ProductsTableType) => {
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
      editable: false,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader>Descrição</S.CustomHeader>,
      renderCell: (data) => (
        <Tooltip placement="top" title={data.value}>
          <S.CustomRow>{data.value}</S.CustomRow>
        </Tooltip>
      ),
      headerClassName: 'hideRightSeparator',
      width: 300,
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
      width: 100,
    },
    {
      field: 'provider1',
      headerName: 'Fornecedor 1',
      type: 'number',
      editable: true,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader>Fornecedor 1</S.CustomHeader>,
      renderCell: (data) => (
        <S.CustomRow selected={data.row['selectedProvider'] === 'provider1'}>
          {data.value ? 'R$ ' + data.value : ''}
        </S.CustomRow>
      ),
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
      renderCell: (data) => (
        <S.CustomRow selected={data.row['selectedProvider'] === 'provider2'}>
          {data.value ? 'R$ ' + data.value : ''}
        </S.CustomRow>
      ),
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
      renderCell: (data) => (
        <S.CustomRow selected={data.row['selectedProvider'] === 'provider3'}>
          {data.value ? 'R$ ' + data.value : ''}
        </S.CustomRow>
      ),
      headerClassName: 'hideRightSeparator',
      flex: 1,
    },
    {
      field: 'provider4',
      headerName: 'Fornecedor 4',
      type: 'number',
      editable: true,
      align: 'left',
      headerAlign: 'left',
      renderHeader: () => <S.CustomHeader right>Fornecedor 4</S.CustomHeader>,
      renderCell: (data) => (
        <S.CustomRow selected={data.row['selectedProvider'] === 'provider4'}>
          {data.value ? 'R$ ' + data.value : ''}
        </S.CustomRow>
      ),
      headerClassName: 'hideRightSeparator',
      flex: 1,
    },
  ];

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

  const handleProviderSelect = (
    row: GridCellParams<any, unknown, unknown, GridTreeNode>
  ) => {
    const auxData = [...data];
    const field = row.colDef.field as keyof ProductsType;
    const index = auxData.findIndex(
      (product) => product.id === row.id && (product[field] as number) > 0
    );
    if (index >= 0) auxData[index].selectedProvider = row.colDef.field;
    setData(auxData);
  };

  return (
    <section>
      <SectionTitle
        title="Fornecedores selecionados"
        description="Vencedores escolhidos por item e análise da última compra"
      />
      <CustomDataGrid
        rows={data.filter(
          (product) =>
            product.provider1 ||
            product.provider2 ||
            product.provider3 ||
            product.provider4
        )}
        columns={columns}
        processRowUpdate={processRowUpdate}
        onCellEditStop={(data) => console.log('DATA: ', data)}
        onCellClick={(data) => handleProviderSelect(data)}
      />
    </section>
  );
};
