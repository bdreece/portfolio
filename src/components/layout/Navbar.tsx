import type { FC } from 'react';

import { Link } from 'react-router-dom';
import styles from '../../styles/Navbar.module.scss';

export type NavbarProps = {
  title?: JSX.Element | string;
};

const Navbar: FC<NavbarProps> = ({ title = 'bdreece.dev' }) => (
  <nav className={styles.navbar}>
    <h2>{title}</h2>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/resume'>Resume</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
