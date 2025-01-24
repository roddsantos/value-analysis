import Logo from '../../assets/kodigos.png';
import * as S from './styles';

export const HeaderApp = () => {
  return (
    <S.HeaderContainer>
      <S.StyledImage draggable="false" src={Logo} />
      <S.IconsContainer>
        <S.StyledIcon className="bx bxs-bell"></S.StyledIcon>
        <S.StyledUserLabel>Administrador</S.StyledUserLabel>
        <S.StyledIcon className="bx bx-exit"></S.StyledIcon>
      </S.IconsContainer>
    </S.HeaderContainer>
  );
};
