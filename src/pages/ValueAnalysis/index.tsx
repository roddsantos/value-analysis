import { Button } from 'components/Button';
import Container from 'components/Container';
import * as S from './styles';
import { ProductsTable } from './components/ProductsTable';
import { DataInfo } from './components/DataInfo';
import { BreadcrumbApp } from 'components/Breadcrumb';
import { Attachments } from './components/Attachments';

export const ValueAnalysisPage = () => {
  return (
    <Container>
      <BreadcrumbApp />
      <S.StyledTitle>Análise de Valores</S.StyledTitle>
      <DataInfo />
      <ProductsTable />
      <Attachments />
      <S.ButtonsContainer>
        <Button types="secondary" title="Cancelar" />
        <Button types="third" title="Salvar Rascunho" />
        <Button types="primary" title="Finalizar" />
      </S.ButtonsContainer>
    </Container>
  );
};
