import { Link } from 'react-router-dom';

/* Constants */
import { productsPath } from '../../../constants';

export const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="bg-white border-b shadow-sm mb-6">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to={productsPath.PRODUCTS}>Products</Link>
          </h1>
          <Link
            to={productsPath.PRODUCT_FAVORITES}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Favorites
          </Link>
        </div>
      </header>

      <main className="p-6">{children}</main>
    </>
  );
};
