import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Product } from 'src/components/Product/Product';
import { ToggleProductsViewContext } from 'src/contexts/contexts';
import { selectorGetProducts } from 'src/redux/selectors/selectors';
import { Loader } from 'src/UI/Loader/Loader';
import styles from './Shop.module.scss';

export const Shop = () => {
  // get toggleViewProducts from context
  const { toggleView } = useContext(ToggleProductsViewContext);
  const classView = toggleView ? styles.grid : styles.layout;

  // get status upload products
  const { error, status, items } = useSelector(selectorGetProducts);

  return (
    <div className={styles.Shop}>
      {status === 'pending' && <Loader />}
      {error && <h2>{error}</h2>}

      {!error && status === 'fulfilled' && (
        <ul className={[styles.ShopList, classView].join(' ')}>
          {items.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </ul>
      )}
    </div>
  );
};
