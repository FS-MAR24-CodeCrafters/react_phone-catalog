/* eslint-disable no-param-reassign */
import { FC } from 'react';
import classes from './CartCheckout.module.scss';
import { ActionsName, CartState } from '../../../types/cart/cartState';
import { UpdateProducts } from '../../../hooks/useCartLocalStorage';

type Props = {
  products: CartState[];
  updateProducts: UpdateProducts;
};

export const CartCheckout: FC<Props> = ({ products, updateProducts }) => {
  const { totalQty, totalSum } = products.reduce(
    (count, el) => {
      count.totalSum += el.name.price * el.quantity;
      count.totalQty += el.quantity;

      return count;
    },
    { totalSum: 0, totalQty: 0 },
  );

  const handleClearAll = () => (
    dispatch({ type: ActionsName.ClearAll })
  );

  return (
    <div className={classes.cartCheckout}>
      <div className={classes.cartPrice}>
        <h2 className={classes.price}>{`$${totalSum}`}</h2>
        <p className={classes.totalItems}>
          {`Total for ${totalQty} ${totalQty === 1 ? 'item' : 'items'}`}
        </p>
      </div>
      <div className={classes.breakLine} />
      <button className={classes.checkoutButton} onClick={handleOpenForm}>
        <p className={classes.checkout}>Checkout</p>
      </button>
    </div>
  );
};
