import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { FormBuy } from 'src/components/FormBuy/FormBuy';
import { Product } from 'src/components/Product/Product';
import { ToggleProductsViewContext } from 'src/contexts/contexts';
import { selectorGetProducts } from 'src/redux/selectors/selectors';
import styles from './Basket.module.scss';

export const Basket = () => {
  // get toggleViewProducts from context
  const { toggleView } = useContext(ToggleProductsViewContext);
  const classView = toggleView ? styles.grid : styles.layout;

  // get products in basket
  const { items, productsInBasket } = useSelector(selectorGetProducts);

  // set product in basket
  const productsBasket = items.filter((product) =>
    productsInBasket.find((item) => item.id === product.id)
  );

  // check flag if basket is empty
  const emptyBasket = !productsBasket.length;

  return (
    <div className={styles.Basket}>
      {emptyBasket && <h1>Кошик порожній :(</h1>}
      {!emptyBasket && <FormBuy productsBasket={productsBasket} />}
      {!emptyBasket && (
        <ul className={[styles.BasketList, classView].join(' ')}>
          {productsBasket.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </ul>
      )}
    </div>
  );
};
