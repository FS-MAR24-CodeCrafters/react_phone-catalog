import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HeaderCounter } from '../../layout/Header/HeaderCounter';
import { useCartLocalStorage } from '../../hooks/useCartLocalStorage';
import { useFavouriteLocalStorage } from '../../hooks/useFavouriteLocalStorage';
import { HeartIcon } from '../../ui/icons/HeartIcon';
import { CartIcon } from '../../ui/icons/CartIcon';

import classes from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  const { goodsInCart } = useCartLocalStorage();
  const { favourites: fav } = useFavouriteLocalStorage();
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);

  return (
    <aside className={classes.menu}>
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
          <HeartIcon className={classes.img} />
          {fav.length ? <HeaderCounter quantity={fav.length} /> : <> </>}
        </NavLink>
        <NavLink to="/cart" className={classes.marked_good}>
          <CartIcon className={classes.img} />
          {goodsInCart.length ? (
            <HeaderCounter quantity={goodsInCart.length} />
          ) : (
            <> </>
          )}
        </NavLink>
      </div>
    </aside>
  );
};
