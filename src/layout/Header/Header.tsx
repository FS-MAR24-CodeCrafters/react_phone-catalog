import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { useResize } from '../../hooks/useResize';
import { HeaderCounter } from './HeaderCounter';
import { useCartLocalStorage } from '../../hooks/useCartLocalStorage';
import { useFavouriteLocalStorage } from '../../hooks/useFavouriteLocalStorage';
import ThemeSwitcher from '../../ui/ThemeSwitcher/ThemeSwitcher';

import menuLight from '../../img/icons/Menu.svg';
import menuDark from '../../img/icons/dark/Menu.svg';
import logoWhite from '../../img/logo.svg';
import logoDark from '../../img/logo_dark.svg';
import heartLike from '../../img/icons/Heart.svg';
import shoppingBag from '../../img/icons/Cart.svg';
import heartLikeDark from '../../img/icons/dark/heart.svg';
import shoppingBagDark from '../../img/icons/dark/Cart.svg';
import closeLight from '../../img/icons/Close.svg';
import closeDark from '../../img/icons/dark/Close.svg';
import classes from './Header.module.scss';
import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';
import { links } from '../../constants/navLinks';

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames(classes.linkContent, { [classes.linkActive]: isActive });
};

export const Header = () => {
  const { products } = useCartLocalStorage();
  const { favourites } = useFavouriteLocalStorage();
  const { themeIsDark } = useThemeLocalStorage();

  const { pathname } = useLocation();
  const [windowWidth] = useResize();

  const heart = themeIsDark ? heartLikeDark : heartLike;
  const cart = themeIsDark ? shoppingBagDark : shoppingBag;
  const logo = themeIsDark ? logoDark : logoWhite;
  const menu = themeIsDark ? menuDark : menuLight;
  const close = themeIsDark ? closeDark : closeLight;

  if (windowWidth < 640) {
    return (
      <header className={`${classes.header}`}>
        <Link to="/" className={classes.link}>
          <img src={logo} alt="Company logo" className={classes.logo} />
        </Link>

        {pathname === '/menu' && (
          <Link to=".." className={classes.button_wrapper}>
            <img src={close} className={`${classes.menu_open}`} alt="back" />
          </Link>
        )}

        {pathname !== '/menu' && (
          <Link to="menu" className={`${classes.button_wrapper}`}>
            <img src={menu} className={`${classes.menu_open}`} alt="menu" />
          </Link>
        )}
      </header>
    );
  }

  return (
    <header className={`${classes.header}`}>
      <div className={classes.theme_switcher}>
        <ThemeSwitcher />
      </div>
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
            <img src={heart} alt="Heart like" />
            {favourites.length ? (
              <HeaderCounter quantity={favourites.length} />
            ) : (
              <> </>
            )}
          </NavLink>
          <NavLink to="/cart" className={`${classes.icon}`}>
            <img src={cart} alt="Company logo" />
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
