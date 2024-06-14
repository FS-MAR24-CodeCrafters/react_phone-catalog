import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HeaderCounter } from '../../layout/Header/HeaderCounter';
import { useCartLocalStorage } from '../../hooks/useCartLocalStorage';
import { useFavouriteLocalStorage } from '../../hooks/useFavouriteLocalStorage';
import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';
import heartLike from '../../img/icons/Heart.svg';
import shoppingBag from '../../img/icons/Cart.svg';
import heartLikeDark from '../../img/icons/dark/heart.svg';
import shoppingBagDark from '../../img/icons/dark/Cart.svg';

import classes from './BurgerMenu.module.scss';
import ThemeSwitcher from '../../ui/ThemeSwitcher/ThemeSwitcher';

export const BurgerMenu = () => {
  const { products } = useCartLocalStorage();
  const { favourites: fav } = useFavouriteLocalStorage();
  const { themeIsDark } = useThemeLocalStorage();
  const { pathname } = useLocation();

  const favourites = themeIsDark ? heartLikeDark : heartLike;
  const cart = themeIsDark ? shoppingBagDark : shoppingBag;

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);

  return (
    <aside className={classes.menu}>
      <ThemeSwitcher />
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavLink
              to="/"
              className={`${classes.link} ${pathname === '/home' && classes.active}`}
            >
              home
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/phones" className={classes.link}>
              phones
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/tablets" className={classes.link}>
              tablets
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/accessories" className={classes.link}>
              accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={classes.marked_goods_wrapper}>
        <NavLink to="/favourites" className={classes.marked_good}>
          <img src={favourites} className={classes.img} alt="favourites" />
          {fav.length ? <HeaderCounter quantity={fav.length} /> : <> </>}
        </NavLink>
        <NavLink to="/cart" className={classes.marked_good}>
          <img className={classes.img} src={cart} alt="cart" />
          {cart.length ? <HeaderCounter quantity={products.length} /> : <> </>}
        </NavLink>
      </div>
    </aside>
  );
};
