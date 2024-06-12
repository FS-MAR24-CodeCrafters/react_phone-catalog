/* eslint-disable no-param-reassign */
import { useContext } from 'react';
import classes from './CartCheckout.module.scss';
import { CartStateContext } from '../../../store/cartStore/cartContext';

type Props = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CartCheckout: React.FC<Props> = ({ setFormOpen }) => {
  const cart = useContext(CartStateContext);
  const { totalQty, totalSum } = cart.reduce((count, el) => {
    count.totalSum += el.name.price * el.quantity;
    count.totalQty += el.quantity;

    return count;
  }, { totalSum: 0, totalQty: 0 });

  const handleOpenForm = () => setFormOpen(true);

  return (
    <div className={classes.cartCheckout}>
      <div className={classes.cartPrice}>
        <h2 className={classes.price}>{`$${totalSum}`}</h2>
        <p className={classes.totalItems}>{`Total for ${totalQty} ${totalQty === 1 ? 'item' : 'items'}`}</p>
      </div>
      <div className={classes.breakLine} />
      <button className={classes.checkoutButton} onClick={handleOpenForm}>
        <p className={classes.checkout}>Checkout</p>
      </button>
    </div>
  );
};
