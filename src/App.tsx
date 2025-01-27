import { CustomRoutes } from 'routes';
import './App.css';
import { UserProvider } from 'contexts/user';

function App() {
  return (
    <UserProvider>
      <CustomRoutes />
    </UserProvider>
  );
}

export default App;
