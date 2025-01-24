import Container from 'components/Container';
import { useNavigation } from 'utils/navigation';

interface ErrorPageInterface {
  code: 401 | 404;
}

export default function ErrorPage({ code }: ErrorPageInterface) {
  const navigate = useNavigation();
  const onPressNavigation = () => {
    const prevPath = window.location.pathname.replace(
      // eslint-disable-next-line no-useless-escape
      /(\/[a-zA-Z0-9\-]+)$/gi,
      ''
    );
    navigate.goBack(prevPath);
  };

  return (
    <Container>
      <h1>page not found</h1>
    </Container>
  );
}
