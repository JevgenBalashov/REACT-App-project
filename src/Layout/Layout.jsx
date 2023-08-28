import React from 'react';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import { Main } from 'src/components/Main/Main';
import { MyModal } from 'src/UI/MyModal/MyModal';

import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.container}>
          <Header />
        </div>
      </header>
      <main className={styles.Main}>
        <div className={styles.container}>
          <Main />
        </div>
      </main>
      <footer className={styles.Footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
      <MyModal />
    </>
  );
};
