import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

/* Pages */
import {
  ProductDetailPage,
  ProductPage,
  FavoritesPage,
} from '../apps/Products';

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
        <Route
          path={productsPath.PRODUCT_FAVORITES}
          element={<FavoritesPage />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
