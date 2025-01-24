import { useNavigate } from 'react-router';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goBack = (altPath?: string) => {
    // eslint-disable-next-line no-nested-ternary
    const pageToGoBack = altPath || (window.history.state.idx === 0 ? '/' : -1);
    window.localStorage.setItem(
      'lastPage',
      pageToGoBack === -1 ? window.location.pathname : pageToGoBack,
    );
    if (pageToGoBack === -1) navigate(pageToGoBack);
    else navigate(pageToGoBack, { replace: true });
  };

  return {
    goBack,
  };
};
