import { CartCheckout } from '../../components/CartPage/CartChekout';
import { CartList } from '../../components/CartPage/CartList';
import classes from './CartPage.module.scss';

export const CartPage = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.titleWrap}>
        <h1 className={classes.cartTitle}>Cart</h1>
      </div>
      <div className={classes.contentWrap}>
        <CartList />
        <CartCheckout />
      </div>
    </div>
  );
};
