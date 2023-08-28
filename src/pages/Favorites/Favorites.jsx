import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Product } from 'src/components/Product/Product';
import { ToggleProductsViewContext } from 'src/contexts/contexts';
import { selectorGetProducts } from 'src/redux/selectors/selectors';
import styles from './Favorites.module.scss';

export const Favorites = () => {
  const { toggleView } = useContext(ToggleProductsViewContext);
  const classView = toggleView ? styles.grid : styles.layout;

  const { items, favorites } = useSelector(selectorGetProducts);

  const productsFavorites = items.filter((product) =>
    favorites.includes(product.id)
  );

  const emptyFavorites = !productsFavorites.length;

  return (
    <div className={styles.Favorites}>
      {emptyFavorites && <h1>Немає обраних товарів :(</h1>}
      {!emptyFavorites && (
        <ul className={[styles.FavoritesList, classView].join(' ')}>
          {productsFavorites.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </ul>
      )}
    </div>
  );
};
