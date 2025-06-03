import { useEffect, useState } from 'react';

/* Libs */
import axios from 'axios';

/*  Layouts */
import { ProductLayout } from '../../layouts';

/* Components */
import { ProductCard } from '../../components';
import { Spinner } from '../../../UI/components';

/* Interfaces */
import type { IProduct } from '../../interfaces';

export const ProductPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const API_URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    axios
      .get<IProduct[]>(API_URL)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <ProductLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ProductLayout>
  );
};
