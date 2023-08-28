import React from 'react';
import styles from './MainLeft.module.scss';

export const MainLeft = () => {
  return (
    <div className={styles.MainLeft}>
      <h1>Filter</h1>
      <ul className={styles.filter_body}>
        <li className={styles.filter_item}>Колір</li>
        <li className={styles.filter_item}>Тип продукту</li>
        <li className={styles.filter_item}>Модель</li>
        <li className={styles.filter_item}>Призначення</li>
      </ul>
    </div>
  );
};
