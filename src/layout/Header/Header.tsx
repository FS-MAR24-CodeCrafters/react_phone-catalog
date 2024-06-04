import { Link, NavLink, useLocation } from 'react-router-dom';

import logo from '../../../public/img/Logo.png';
import classes from './Header.module.scss';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={`${classes.header}`}>
      <Link to="/" className={classes.link}>
        <img src={logo} alt="Company logo" className={classes.logo} />
      </Link>

      {pathname === '/menu' && (
        <div className={classes.button_wrapper}>
          <NavLink to="/" className={classes.menu_close} />
        </div>
      )}

      {pathname === '/' && (
        <div className={classes.button_wrapper}>
          <NavLink to="menu" className={classes.menu_open} />
        </div>
      )}
    </header>
  );
};
