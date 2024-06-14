import classes from './CartEmpty.module.scss';
import CartEmptyPhoto from '../../../img/cart-is-empty.png';

export const CartEmpty = () => (
  <div className={classes.cartEmpty}>
    <div className={classes.contentWrap}>
      <div className={classes.cartEmptyPhotoWrap}>
        <img
          src={CartEmptyPhoto}
          alt="Cart Empty"
          className={classes.cartEmptyPhoto}
        />
      </div>
      <p className={classes.cartEmptyTitle}>The cart is empty</p>
    </div>
  </div>
);
