import React from 'react';
import styles from './Loader.module.scss';

import { LoaderIco } from '../Icons/LoaderIco/LoaderIco';

export const Loader = () => {
  return (
    <div className={styles.Loader}>
      <span className={styles.fa_loader}>
        <LoaderIco width={50} fill="#d3d3d3" />
      </span>
    </div>
  );
};
