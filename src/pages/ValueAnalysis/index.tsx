import { Button } from 'components/Button';
import Container from 'components/Container';
import * as S from './styles';
import { ProductsTable } from './components/ProductsTable';
import { DataInfo } from './components/DataInfo';
import { BreadcrumbApp } from 'components/Breadcrumb';
import { Attachments } from './components/Attachments';
import { SelectedProviders } from './components/SelectedProviders/indext';
import { OrderType, ProductsType } from 'types/services';
import { useEffect, useState } from 'react';
import { RejectOrderDialog } from './components/RejectOrderDialog';
import { CustomDialogProps, CustomSnackbar } from 'components/CustomSnackbar';
import { useProductsServices } from 'services/products';
import { closeSnack, decrescent, errorSnack, successSnack } from 'utils/data';
import { useOrdersServices } from 'services/orders';
import { OrderDialog } from './components/OrderDialog';

export const ValueAnalysisPage = () => {
  const { productsList, updateProducts } = useProductsServices();
  const { createOrder } = useOrdersServices();

  const [data, setData] = useState<ProductsType[]>([]);
  const [open, setOpen] = useState(false);
  const [openRejected, setOpenRejected] = useState(false);
  const [snack, setSnack] = useState<CustomDialogProps>({
    isOpen: false,
    message: '',
    variant: undefined,
  });

  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const dataInfoProps = {
    code,
    setCode,
    description,
    setDescription,
    type,
    setType,
  };

  const handleApprove = async () => {
    try {
      await updateProducts(
        data.filter(
          (product) =>
            product.provider1 ||
            product.provider2 ||
            product.provider3 ||
            product.provider4
        )
      );
      await createOrder({
        code: code.trim(),
        description: description.trim(),
        type: type.trim(),
        justification: '',
        status: 'approved',
      });
      setSnack(successSnack('Criado Pedido para o Protheus!'));
      setOpen(false);
    } catch (error) {
      setSnack(errorSnack('Erro ao criar pedido'));
    }
  };

  const handleReject = () => {
    setOpen(false);
    setOpenRejected(true);
  };

  const handleRejectSuccessful = (order: OrderType) => {
    setCode(order.code);
    setType(order.type);
    setDescription(order.description);
    setOpenRejected(false);
    setSnack(successSnack('Pedido rejeitado com sucesso!'));
  };

  const handleRejectFailed = (obj: any) => {
    console.log(obj);
    setSnack(errorSnack('Erro ao rejeitar pedido'));
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
      <DataInfo {...dataInfoProps} />
      <ProductsTable data={data} setData={setData} />
      <Attachments setSnack={setSnack} />
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
        <OrderDialog
          open={open}
          setOpen={setOpen}
          handleApprove={() => handleApprove()}
          handleReject={() => handleReject()}
        />
      )}
      {snack.isOpen && (
        <CustomSnackbar {...snack} onClose={() => setSnack(closeSnack())} />
      )}
      {openRejected && (
        <RejectOrderDialog
          open={openRejected}
          setOpen={setOpenRejected}
          handleConfirm={(order) => handleRejectSuccessful(order)}
          handleError={(err) => handleRejectFailed(err)}
          data={{
            code,
            description,
            type,
          }}
        />
      )}
    </Container>
  );
};
