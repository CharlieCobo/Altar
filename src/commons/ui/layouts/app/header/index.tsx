import { useMenu } from '../../../hooks/use-menu';
import styles from './styles.module.css';

export const Header = () => {
  const toggleMenu = useMenu(state => state.toggle);
  return <header className={styles['header']}>Header Component
  <button onClick={() => toggleMenu()}>Toggle Menu</button></header>;
};
