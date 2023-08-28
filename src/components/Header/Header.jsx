import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectorGetProducts } from 'src/redux/selectors/selectors';
import { BasketIco } from 'src/UI/Icons/BasketIco/BasketIco';
import { StarIco } from 'src/UI/Icons/StarIco/StarIco';
import { Logo } from 'src/UI/Logo/Logo';
import { HeaderMenu } from 'src/UI/Navigation/HeaderMenu/HeaderMenu';
import { ToggleProductsViewContext } from 'src/contexts/contexts';
import styles from './Header.module.scss';

export const Header = () => {
  // get toggleViewProducts from context
  const { toggleView, setToggleView } = useContext(ToggleProductsViewContext);

  // set toggleViewProducts
  const handleToggleView = (e) => {
    setToggleView(!toggleView);
  };

  // get favorites, productsInBasket
  const { favorites, productsInBasket } = useSelector(selectorGetProducts);

  // set count favorites and basket
  const countFavorites = favorites.length;
  const countProductsInBasket = productsInBasket.reduce(
    (value, item) => value + item.count,
    0
  );

  return (
    <div className={styles.Header__row}>
      <Logo />
      <HeaderMenu />
      <div className={styles.HeaderActions}>
        <div className={styles.HeaderBasket}>
          <BasketIco width={26} fill={'#535353'} />
          <span className={styles.basketValue}>{countProductsInBasket}</span>
        </div>
        <div className={styles.HeaderFavorites}>
          <StarIco width={26} fill={'#535353'} />
          <span className={styles.favoritesValue}>{countFavorites}</span>
        </div>
      </div>
    </div>
  );
};
