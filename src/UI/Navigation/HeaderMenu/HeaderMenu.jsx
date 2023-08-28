import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';

export const HeaderMenu = () => {
  return (
    <nav className={styles.HeaderMenu}>
      <ul className={styles.HeaderMenu__list}>
        <li className={styles.HeaderMenu__item}>
          <NavLink to="/">Shop</NavLink>
        </li>
        <li className={styles.HeaderMenu__item}>
          <NavLink to="/basket">Basket</NavLink>
        </li>
        <li className={styles.HeaderMenu__item}>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};
