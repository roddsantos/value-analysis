import { NavigateOptions, useNavigate } from 'react-router';

export const useNavigation = () => {
  const navigate = useNavigate();

  /**
   * go to the latest page or an alternate page
   * @param altPath the alternate page to go back
   */
  const goBack = (altPath?: string) => {
    // eslint-disable-next-line no-nested-ternary
    const pageToGoBack = altPath || (window.history.state.idx === 0 ? '/' : -1);
    window.localStorage.setItem(
      'lastPage',
      pageToGoBack === -1 ? window.location.pathname : pageToGoBack
    );
    if (pageToGoBack === -1) navigate(pageToGoBack);
    else navigate(pageToGoBack, { replace: true });
  };

  /**
   * Navigates to the specified path.
   * @param path - The path to navigate to.
   */
  function goTo(path: string, options?: NavigateOptions) {
    navigate(path, options);
  }

  return {
    goBack,
    goTo,
  };
};
