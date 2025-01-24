import * as S from './styles';

export type ContainerProps = {
  children?: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <S.Container>
      <S.Content>{!!children && children}</S.Content>
    </S.Container>
  );
}

export default Container;
