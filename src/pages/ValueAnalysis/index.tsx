import { Button } from 'components/Button';
import Container from 'components/Container';
import * as S from './styles';
import { ProductsTable } from './components/ProductsTable';
import { DataInfo } from './components/DataInfo';
import { BreadcrumbApp } from 'components/Breadcrumb';
import { Attachments } from './components/Attachments';
import { SelectedProviders } from './components/SelectedProviders/indext';
import { ProductsType } from 'types/products';
import { useEffect, useState } from 'react';
import { CustomDialog } from 'components/CustomDialog';
import { RejectOrderDialog } from './components/RejectOrderDialog';
import { CustomDialogProps, CustomSnackbar } from 'components/CustomSnackbar';
import { useProductsServices } from 'services/products';
import { closeSnack, decrescent, errorSnack, successSnack } from 'utils/data';

export const ValueAnalysisPage = () => {
  const { productsList } = useProductsServices();

  const [data, setData] = useState<ProductsType[]>([]);
  const [open, setOpen] = useState(false);
  const [openRejected, setOpenRejected] = useState(false);
  const [snack, setSnack] = useState<CustomDialogProps>({
    isOpen: false,
    message: '',
    variant: undefined,
  });

  const handleApprove = () => {
    setOpen(false);
    setSnack(successSnack('Criado Pedido para o Protheus!'));
  };

  const handleReject = () => {
    setOpen(false);
    setOpenRejected(true);
  };

  const handleRejectSuccessful = (obj: any) => {
    console.log(obj);
    setOpenRejected(false);
    setSnack(successSnack('Pedido rejeitado com sucesso!'));
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await productsList();
        setData(products.data.sort((a, b) => decrescent(a, b, 'code')));
      } catch (error) {
        setData([]);
        setSnack(errorSnack('Erro ao obter os produtos'));
      }
    };
    getProducts();
  }, []);

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
            <Button
              types="third"
              title="Reprovar"
              onClick={() => handleReject()}
            />
            <Button
              types="primary"
              title="Aprovar"
              onClick={() => handleApprove()}
            />
          </S.DialogButtonsContainer>
        </CustomDialog>
      )}
      {snack.isOpen && (
        <CustomSnackbar {...snack} onClose={() => setSnack(closeSnack())} />
      )}
      {openRejected && (
        <RejectOrderDialog
          open={openRejected}
          setOpen={setOpenRejected}
          handleConfirm={(obj) => handleRejectSuccessful(obj)}
        />
      )}
    </Container>
  );
};
