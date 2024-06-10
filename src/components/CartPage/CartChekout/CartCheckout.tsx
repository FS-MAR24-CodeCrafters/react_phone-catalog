/* eslint-disable no-param-reassign */
import { useContext } from 'react';
import classes from './CartCheckout.module.scss';
import { CartDispatchContext, CartStateContext } from '../../../store/cartStore/cartContext';
import { ActionsName } from '../../../types/cart/cartState';

export const CartCheckout = () => {
  const dispatch = useContext(CartDispatchContext);
  const cart = useContext(CartStateContext);
  const { totalQty, totalSum } = cart.reduce((count, el) => {
    count.totalSum += el.name.price * el.quantity;
    count.totalQty += el.quantity;

    return count;
  }, { totalSum: 0, totalQty: 0 });

  const handleClearAll = () => (
    dispatch({ type: ActionsName.ClearAll })
  );

  return (
    <div className={classes.cartCheckout}>
      <div className={classes.cartPrice}>
        <h2 className={classes.price}>{`$${totalSum}`}</h2>
        <p className={classes.totalItems}>{`Total for ${totalQty} ${totalQty === 1 ? 'item' : 'items'}`}</p>
      </div>
      <div className={classes.breackLine} />
      <button className={classes.checkoutButton} onClick={handleClearAll}>
        <p className={classes.checkout}>Checkout</p>
      </button>
    </div>
  );
};
