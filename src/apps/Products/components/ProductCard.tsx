/* Interfaces */
import type { IProduct } from '../interfaces';

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <section
      key={product.id}
      className="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-between"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />

      <div className="text-sm text-gray-500 mb-2">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
          {product.category}
        </span>
      </div>

      <h2 className="text-lg font-medium mb-1 line-clamp-2">{product.title}</h2>

      <p className="text-gray-700 text-sm line-clamp-3 mb-3">
        {product.description}
      </p>

      <div className="text-right text-base font-semibold text-green-600">
        ${product.price.toFixed(2)}
      </div>
    </section>
  );
};
