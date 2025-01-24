import { Button } from 'components/Button';
import Container from 'components/Container';
import * as S from './styles';
import { ProductsTable } from './components/ProductsTable';
import { DataInfo } from './components/DataInfo';

export const ValueAnalysisPage = () => {
  return (
    <Container>
      <S.StyledTitle>Análise de Valores</S.StyledTitle>
      <DataInfo />
      <ProductsTable />
      <S.ButtonsContainer>
        <Button types="secondary" title="Cancelar" />
        <Button types="third" title="Salvar Rascunho" />
        <Button types="primary" title="Finalizar" />
      </S.ButtonsContainer>
    </Container>
  );
};
