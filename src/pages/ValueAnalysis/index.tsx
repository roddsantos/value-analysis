import { Button } from 'components/Button';
import Container from 'components/Container';
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import * as S from './styles';
import { ProductsTable } from './components/ProductsTable';
import { DataInfo } from './components/DataInfo';
import { BreadcrumbApp } from 'components/Breadcrumb';
import { Attachments } from './components/Attachments';
import { SelectedProviders } from './components/SelectedProviders/indext';
import { ProductsType } from 'types/products';
import { useState } from 'react';
import { CustomDialog } from 'components/CustomDialog';

export const ValueAnalysisPage = () => {
  const [data, setData] = useState<ProductsType[]>([]);
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  const handleCloseSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const handleApprove = () => {
    setOpen(false);
    setOpenSnack(true);
  };

  return (
    <Container>
      <BreadcrumbApp />
      <S.StyledTitle>Análise de Valores</S.StyledTitle>
      <DataInfo />
      <ProductsTable data={data} setData={setData} />
      <Attachments />
      <SelectedProviders data={data} setData={setData} />
      <S.StyledDivisor />
      <S.ButtonsContainer>
        <Button types="secondary" title="Cancelar" />
        <Button types="third" title="Salvar Rascunho" />
        <Button
          types="primary"
          title="Finalizar"
          onClick={() => setOpen(true)}
        />
      </S.ButtonsContainer>
      {open && (
        <CustomDialog
          onClose={() => setOpen(false)}
          maxWidth="xl"
          open={open}
          title="Enviar cotação"
        >
          <S.StyledDialogText>
            Deseja enviar agora como pedido para o Protheus?
          </S.StyledDialogText>
          <S.DialogButtonsContainer>
            <Button
              types="secondary"
              title="Retornar a edição"
              onClick={() => setOpen(false)}
            />
            <Button types="third" title="Reprovar" />
            <Button
              types="primary"
              title="Aprovar"
              onClick={() => handleApprove()}
            />
          </S.DialogButtonsContainer>
        </CustomDialog>
      )}
      {openSnack && (
        <S.StyledSnackbar
          open={openSnack}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          onClose={handleCloseSnack}
          autoHideDuration={4000}
        >
          <div>
            <i className="bx bx-check"></i>
            <p>Criado Pedido para o Protheus!</p>
            <i
              onClick={() => setOpenSnack(false)}
              style={{ cursor: 'pointer' }}
              className="bx bx-x"
            ></i>
          </div>
        </S.StyledSnackbar>
      )}
    </Container>
  );
};
