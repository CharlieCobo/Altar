import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router';
import autoAnimate from '@formkit/auto-animate';

import { Header } from './header';
import { Menu } from './menu';

import styles from './styles.module.css';

export default () => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <>
      <Header />
      <div className={styles['content']}>
        <Menu />
        <main ref={parent} className={styles['main']}>
          <Outlet />
        </main>
      </div>
    </>
  );
};
