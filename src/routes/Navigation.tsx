import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

/* Pages */
import { ProductDetailPage, ProductPage } from '../apps/Products';

/* Constants */
import { productsPath } from '../constants';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={productsPath.PRODUCTS} element={<ProductPage />} />
        <Route
          path={productsPath.PRODUCT_DETAIL}
          element={<ProductDetailPage />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
