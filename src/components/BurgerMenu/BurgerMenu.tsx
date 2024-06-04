import { NavLink, useLocation } from 'react-router-dom';
import classes from './BurgerMenu.module.scss';
import cart from '../../../public/img/icons/Shopping-bag(Cart).png';
import favourites from '../../../public/img/icons/Favourites(HeartLike).png';

export const BurgerMenu = () => {
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
        </div>
        <div className={classes.marked_good}>
          <img className={classes.img} src={cart} alt="cart" />
        </div>
      </div>
    </aside>
  );
};
