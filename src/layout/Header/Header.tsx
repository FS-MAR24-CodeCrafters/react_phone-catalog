import {
  Link, NavLink, useLocation, useNavigate,
} from 'react-router-dom';
import classNames from 'classnames';

import logo from '../../img/Logo.png';
import heartLike from '../../img/icons/Favourites(HeartLike).png';
import shoppingBag from '../../img/icons/Shopping-bag(Cart).png';
import classes from './Header.module.scss';
import { useResize } from '../../hooks/useResize';
import { HeaderCounter } from './HeaderCounter';
import { useCartLocalStorage } from '../../hooks/useCartLocalStorage';
import { useFavouriteLocalStorage } from '../../hooks/useFavouriteLocalStorage';

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames(classes.linkContent, { [classes.linkActive]: isActive });
};

export const Header = () => {
  const { products } = useCartLocalStorage();
  const { favourites } = useFavouriteLocalStorage();

  const { pathname } = useLocation();
  const [windowWidth] = useResize();
  const navigate = useNavigate();

  interface HeaderLink {
    label: string;
    name: string;
    link: string;
  }

  const links: HeaderLink[] = [
    {
      label: 'home',
      name: 'home',
      link: '/',
    },
    {
      label: 'phones',
      name: 'phones',
      link: '/phones',
    },
    {
      label: 'tablets',
      name: 'tablets',
      link: '/tablets',
    },
    {
      label: 'accessories',
      name: 'accessories',
      link: '/accessories',
    },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  if (windowWidth < 640) {
    return (
      <header className={`${classes.header}`}>
        <Link to="/" className={classes.link}>
          <img src={logo} alt="Company logo" className={classes.logo} />
        </Link>

        {pathname === '/menu' && (
          <div className={classes.button_wrapper}>
            {/* <NavLink to="/" className={classes.menu_close} /> */}
            <button
              onClick={handleBack}
              className={classes.menu_close}
              aria-label="Back to previous position"
            />
          </div>
        )}

        {pathname !== '/menu' && (
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
          <NavLink to="/favourites" className={`${classes.icon}`}>
            <img src={heartLike} alt="Heart like" />
            {favourites.length ? (
              <HeaderCounter quantity={favourites.length} />
            ) : (
              <> </>
            )}
          </NavLink>
          <NavLink to="/cart" className={`${classes.icon}`}>
            <img src={shoppingBag} alt="Company logo" />
            {products.length ? (
              <HeaderCounter quantity={products.length} />
            ) : (
              <> </>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};
