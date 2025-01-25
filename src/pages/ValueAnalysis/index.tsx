import { Button } from 'components/Button';
import Container from 'components/Container';
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
              onClick={() => setOpen(false)}
            />
          </S.DialogButtonsContainer>
        </CustomDialog>
      )}
    </Container>
  );
};
