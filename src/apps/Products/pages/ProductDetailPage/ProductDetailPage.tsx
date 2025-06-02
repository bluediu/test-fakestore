import { useEffect, useState } from 'react';

/* Libs */
import axios from 'axios';

/* Hooks */
import { useNavigate, useParams } from 'react-router-dom';

/* Components */
import { Spinner } from '../../../UI/components';
import { ProductDetail } from '../../components';

import type { IProduct } from '../../interfaces';
/* Interfaces */

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ⬅ Volver
      </button>

      <ProductDetail product={product!} />
    </div>
  );
};
