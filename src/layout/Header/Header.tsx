import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import logo from '../../../public/img/Logo.png';
import heartLike from '../../../public/img/icons/Favourites(HeartLike).png';
import shoppingBag from '../../../public/img/icons/Shopping-bag(Cart).png';
import classes from './Header.module.scss';

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames(classes.linkContent, {
    [classes.linkActive]: isActive,
  });
};

export const Header = () => {
  const { pathname } = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const links = ['home', 'phones', 'tablets', 'accessories'];

  interface HeaderLink {
    label: string;
    name: string;
    link: string;
  }

  const links: HeaderLink[] = [
    { label: 'home', name: 'home', link: '/' },
    { label: 'phones', name: 'phones', link: '/phones' },
    { label: 'tablets', name: 'tablets', link: '/tablets' },
    { label: 'accessories', name: 'accessories', link: '/accessories' },
  ];

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  if (windowWidth < 640) {
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
  }

  return (
    <header className={`${classes.header}`}>
      <Link to="/" className={classes.link}>
        <img src={logo} alt="Company logo" className={classes.logo} />
      </Link>

      <div className={`${classes.headerContent}`}>
        <nav className={`${classes.linksContainer}`}>
          {links.map((link) => (
            <NavLink
              to={`${link.link}`}
              key={link.label}
              className={getLinkClass}
            >
              {link.name.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        <div className={`${classes.iconContainer}`}>
          <div className={`${classes.icon}`}>
            <img src={heartLike} alt="Heart like" />
          </div>
          <div className={`${classes.icon}`}>
            <img src={shoppingBag} alt="Company logo" />
          </div>
        </div>
      </div>
    </header>
  );
};
