import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainRight.module.scss';

export const MainRight = () => {
  return (
    <div className={styles.MainRight}>
      <Outlet />
    </div>
  );
};
