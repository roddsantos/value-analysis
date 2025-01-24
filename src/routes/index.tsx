import ErrorPage from 'pages/Error';
import { ValueAnalysisPage } from 'pages/ValueAnalysis';
import { BrowserRouter, Route, Routes } from 'react-router';

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ValueAnalysisPage />} />
        <Route path="*" element={<ErrorPage code={404} />} />
      </Routes>
    </BrowserRouter>
  );
};
