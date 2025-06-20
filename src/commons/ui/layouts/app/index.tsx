import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router';
import autoAnimate from '@formkit/auto-animate';

import { Header } from './header';
import { Menu } from './menu';

export default () => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <>
      <Header />
      <Menu />
      <main ref={parent}>
        <Outlet />
      </main>
    </>
  );
};
