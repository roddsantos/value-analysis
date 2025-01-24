import { ButtonProps } from '@mui/material';
import * as S from './styles';

interface ButtonType extends ButtonProps {
  types?: 'primary' | 'secondary' | 'third';
}
export function Button({ title, onClick, type, types, ...rest }: ButtonType) {
  return (
    <S.ButtonContainer
      type={type}
      types={types}
      onClick={(e) => !!onClick && onClick(e)}
      {...rest}
    >
      {title}
    </S.ButtonContainer>
  );
}
