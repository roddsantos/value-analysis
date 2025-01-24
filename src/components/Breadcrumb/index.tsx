import * as S from './styles';

export const BreadcrumbApp = () => {
  const breadcrumbs = [
    <p key="bcb-cotacao">Cotaçao</p>,
    <p key="bcb-adv">Análise de Valores</p>,
  ];

  return (
    <S.StyledBreadcrumbContainer>
      <S.BreadcrumbHomeIcon className="bx bxs-home"></S.BreadcrumbHomeIcon>
      <S.StyledBreadcrumbs separator=">">{breadcrumbs}</S.StyledBreadcrumbs>
    </S.StyledBreadcrumbContainer>
  );
};
