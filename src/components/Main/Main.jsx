import React from 'react';
import { MainLeft } from '../MainLeft/MainLeft';
import { MainRight } from '../MainRight/MainRight';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <div className={styles.Main__row}>
      <MainLeft />
      <MainRight />
    </div>
  );
};
