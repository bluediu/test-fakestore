import { useEffect, useState } from 'react';

/* Libs */
import axios from 'axios';

/* Hooks */
import { useParams } from 'react-router-dom';

/* Components */
import { ProductDetail } from '../../components';
import { GoBackButton, Spinner } from '../../../UI/components';

/* Interfaces */
import type { IProduct } from '../../interfaces';

export const ProductDetailPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const API_URL = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    axios
      .get<IProduct>(API_URL)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) return <Spinner />;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <GoBackButton />

      <ProductDetail product={product!} />
    </div>
  );
};
