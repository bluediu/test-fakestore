/* Layouts */
import { ProductLayout } from '../../layouts';

/* Components */
import { ProductCard } from '../../components';
import { GoBackButton } from '../../../UI/components';

/* Hooks */
import { useFavorites } from '../../hooks';

/* Interfaces */
import type { IProduct } from '../../interfaces';

export const FavoritesPage = () => {
  const { favorites } = useFavorites<IProduct>();

  return (
    <ProductLayout>
      <h2 className="text-2xl font-semibold mb-6">My favorites</h2>

      <GoBackButton />

      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </ProductLayout>
  );
};
