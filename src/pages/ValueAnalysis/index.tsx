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

export const ValueAnalysisPage = () => {
  const [data, setData] = useState<ProductsType[]>([]);

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
        <Button types="primary" title="Finalizar" />
      </S.ButtonsContainer>
    </Container>
  );
};
