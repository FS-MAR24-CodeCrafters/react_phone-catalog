import {
  Link, NavLink, useLocation, useNavigate,
} from 'react-router-dom';
import classNames from 'classnames';

import { useResize } from '../../hooks/useResize';
import { HeaderCounter } from './HeaderCounter';
import { useCartLocalStorage } from '../../hooks/useCartLocalStorage';
import { useFavouriteLocalStorage } from '../../hooks/useFavouriteLocalStorage';
import ThemeSwitcher from '../../ui/ThemeSwitcher/ThemeSwitcher';

import { links } from '../../constants/navLinks';
import { CartIcon } from '../../ui/icons/CartIcon';
import { LogoIcon } from '../../ui/icons/LogoIcon';
import { HeartIcon } from '../../ui/icons/HeartIcon';
import { MenuIcon } from '../../ui/icons/MenuIcon';
import { CloseIcon } from '../../ui/icons/CloseIcon';

import classes from './Header.module.scss';

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames(classes.linkContent, { [classes.linkActive]: isActive });
};

export const Header = () => {
  const { goodsInCart } = useCartLocalStorage();
  const { favourites } = useFavouriteLocalStorage();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const [windowWidth] = useResize();

  if (windowWidth < 640) {
    return (
      <header className={`${classes.header}`}>
        <Link to="/" className={classes.link}>
          <LogoIcon className={classes.logo} />
        </Link>

        {pathname === '/menu' && (
          <div className={`${classes.iconContainer}`}>
            <div className={classes.theme_switcher}>
              <ThemeSwitcher />
            </div>
            <Link
              to=".."
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
              className={classes.button_wrapper}
            >
              <CloseIcon className={`${classes.menu_open}`} />
            </Link>
          </div>
        )}

        {pathname !== '/menu' && (
          <Link to="menu" className={`${classes.button_wrapper}`}>
            <MenuIcon className={`${classes.menu_open}`} />
          </Link>
        )}
      </header>
    );
  }

  return (
    <header className={`${classes.header}`}>
      <Link to="/" className={classes.link}>
        <LogoIcon className={classes.logo} />
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
          <div className={classes.theme_switcher}>
            <ThemeSwitcher />
          </div>
          <NavLink to="/favourites" className={`${classes.icon}`}>
            <HeartIcon />
            {favourites.length ? (
              <HeaderCounter quantity={favourites.length} />
            ) : (
              <> </>
            )}
          </NavLink>
          <NavLink to="/cart" className={`${classes.icon}`}>
            <CartIcon />
            {goodsInCart.length ? (
              <HeaderCounter quantity={goodsInCart.length} />
            ) : (
              <> </>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};
