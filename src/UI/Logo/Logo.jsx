import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link href="#" className={styles.LogoLink}>
      <img src="./img/logo1.png" alt="Logo" />
    </Link>
  );
};
