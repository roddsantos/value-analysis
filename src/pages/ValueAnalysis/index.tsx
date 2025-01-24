import { Button } from 'components/Button';
import Container from 'components/Container';
import * as S from './styles';
import { ProductsTable } from './components/ProductsTable';

export const ValueAnalysisPage = () => {
  return (
    <Container>
      <h1>Análise de Valores</h1>
      <ProductsTable />
      <S.ButtonsContainer>
        <Button types="secondary" title="Cancelar" />
        <Button types="third" title="Salvar Rascunho" />
        <Button types="primary" title="Finalizar" />
      </S.ButtonsContainer>
    </Container>
  );
};
