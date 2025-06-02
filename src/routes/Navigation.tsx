import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

/* Pages */
import { ProductPage } from '../apps/Products';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
