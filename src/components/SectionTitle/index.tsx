import * as S from './styles';

type SectionTitleType = {
  title: string;
  description?: string;
};

export const SectionTitle = ({ title, description }: SectionTitleType) => {
  return (
    <S.StyledContainer>
      <S.StyledDivisor />
      <S.StyledSectionTitle>{title}</S.StyledSectionTitle>
      {description && (
        <S.StyledSectionDescription>{description}</S.StyledSectionDescription>
      )}
    </S.StyledContainer>
  );
};
