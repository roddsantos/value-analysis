import * as S from './styles';

export const DataInfo = () => {
  return (
    <S.StyledContainer>
      <S.StyledTextfield
        width={125}
        disabled
        slotProps={{
          input: {
            startAdornment: (
              <S.StyledStartAdornment>Código</S.StyledStartAdornment>
            ),
          },
        }}
        value="001"
      />
      <S.StyledTextfield
        width={246}
        multiline
        disabled
        slotProps={{
          input: {
            startAdornment: (
              <S.StyledStartAdornment>Descrição</S.StyledStartAdornment>
            ),
          },
        }}
        value="Lista de Expediente"
      />
      <S.StyledTextfield
        disabled
        width={246}
        slotProps={{
          input: {
            startAdornment: (
              <S.StyledStartAdornment>Type:</S.StyledStartAdornment>
            ),
          },
        }}
        value="Material"
      />
    </S.StyledContainer>
  );
};
