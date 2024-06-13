import { NavLink, useLocation } from 'react-router-dom';
import cart from '../../img/icons/Shopping-bag(Cart).png';
import favourites from '../../img/icons/Favourites(HeartLike).png';

import classes from './BurgerMenu.module.scss';
import { HeaderCounter } from '../../layout/Header/HeaderCounter';
import { useCartLocalStorage } from '../../hooks/useCartLocalStorage';
import { useFavouriteLocalStorage } from '../../hooks/useFavouriteLocalStorage';

export const BurgerMenu = () => {
  const { products } = useCartLocalStorage();
  const { favourites: fav } = useFavouriteLocalStorage();
  const { pathname } = useLocation();

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
        <div className={classes.marked_good}>
          <img src={favourites} className={classes.img} alt="favourites" />
          {fav.length ? <HeaderCounter quantity={fav.length} /> : <> </>}
        </div>
        <div className={classes.marked_good}>
          <img className={classes.img} src={cart} alt="cart" />
          {cart.length ? <HeaderCounter quantity={products.length} /> : <> </>}
        </div>
      </div>
    </aside>
  );
};
