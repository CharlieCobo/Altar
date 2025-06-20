import { Link } from 'react-router';

import styles from './styles.module.css';
import { useMenu } from '../../../hooks/use-menu';
import { clsx } from '../../../../core/utils/clsx';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export const Menu = () => {
  const open = useMenu(state => state.open);
  const [parent] = useAutoAnimate();

  const menuStyle = clsx(styles['menu'], {
    [styles['menu-open']]: open,
  });

  return (
    <aside className={menuStyle} ref={parent}>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/crews/list" className="nav-link">
              Crews
            </Link>
          </li>
          <li>
            <Link to="/band" className="nav-link">
              Band
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
