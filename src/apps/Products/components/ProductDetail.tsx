/* Hooks */
import { useFavorites } from '../hooks';

/* Interfaces */
import type { IProduct } from '../interfaces';

export const ProductDetail = ({ product }: { product: IProduct }) => {
  const { toggleFavorite, isFavorite } = useFavorites<IProduct>();

  return (
    <article className="grid md:grid-cols-2 gap-6 items-center bg-white p-6 rounded-xl shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-contain"
      />

      <div>
        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full mb-2">
          {product.category}
        </span>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-green-600">${product.price}</p>

        <button
          onClick={() => toggleFavorite(product)}
          className={`mt-4 px-4 py-2 rounded text-white ${
            isFavorite(product.id) ? 'bg-red-500' : 'bg-gray-700'
          }`}
        >
          {isFavorite(product.id) ? 'Remove Favorite' : 'Add to Favorites'}
        </button>
      </div>
    </article>
  );
};
