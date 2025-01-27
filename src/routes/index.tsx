import ErrorPage from 'pages/Error';
import { LoginPage } from 'pages/Login';
import { ValueAnalysisPage } from 'pages/ValueAnalysis';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HeaderApp } from 'components/Header';
import { DrawerApp } from 'components/Drawer';

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderApp />
      <DrawerApp />
      <Routes>
        <Route index element={<ValueAnalysisPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage code={404} />} />
      </Routes>
    </BrowserRouter>
  );
};
