import { useNavigation } from 'utils/navigation';
import Logo from '../../assets/kodigos.png';
import * as S from './styles';
import { useLocation } from 'react-router';
import { useUserContext } from 'contexts/user';

export const HeaderApp = () => {
  const { goTo } = useNavigation();
  const { user } = useUserContext();
  const navigate = useLocation();

  return navigate.pathname === '/login' ? (
    <></>
  ) : (
    <S.HeaderContainer>
      <S.StyledImage draggable="false" src={Logo} />
      <S.IconsContainer>
        <S.StyledIcon className="bx bxs-bell"></S.StyledIcon>
        <S.StyledUserLabel>{user || 'Administrador'}</S.StyledUserLabel>
        <S.StyledIcon
          onClick={() => goTo('/login')}
          className="bx bx-exit"
        ></S.StyledIcon>
      </S.IconsContainer>
    </S.HeaderContainer>
  );
};
