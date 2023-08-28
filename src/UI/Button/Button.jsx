import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ text, backgroundColor, onClick }) => {
  return (
    <button
      className={styles.MyButton}
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
