import * as S from './styles';
import IconAsignment from '../../assets/assignment.svg';
import IconAsignmentList from '../../assets/baseline-assignment.svg';
import IconFileCopy from '../../assets/file-copy.svg';
import { useLocation } from 'react-router';

export const DrawerApp = () => {
  const navigate = useLocation();

  return navigate.pathname === '/login' ? (
    <></>
  ) : (
    <S.StyledDrawer>
      <S.StyledIcon className="bx bxs-home"></S.StyledIcon>
      <S.StyledIcon className="bx bxs-file-plus"></S.StyledIcon>
      <S.StyledIcon className="bx bxs-file"></S.StyledIcon>
      <S.StyledImage src={IconAsignment} />
      <S.StyledImage src={IconAsignmentList} />
      <S.StyledImage src={IconFileCopy} />
    </S.StyledDrawer>
  );
};
