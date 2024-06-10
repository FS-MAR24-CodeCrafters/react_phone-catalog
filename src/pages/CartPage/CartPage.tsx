import { useContext } from 'react';
import { CartCheckout } from '../../components/CartPage/CartChekout';
import { CartList } from '../../components/CartPage/CartList';
import { CartStateContext } from '../../store/cartStore/cartContext';
import classes from './CartPage.module.scss';
import { CartEmpty } from '../../components/CartPage/CartEmpy';
import { CartTitle } from '../../components/CartPage/CartTitle';

export const CartPage = () => {
  const cart = useContext(CartStateContext);

  return (
    <div className={classes.wrap}>
      <CartTitle />
      {cart.length ? (
        <div className={classes.contentWrap}>
          <CartList />
          <CartCheckout />
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};
