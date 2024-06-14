/* eslint-disable no-param-reassign */
import { FC } from 'react';
import classes from './CartCheckout.module.scss';
import { ActionsName, FilledCartState } from '../../../types/cart/cartState';
import { UpdateProducts } from '../../../hooks/useCartLocalStorage';
import { Button } from '../../../ui/Buttons';

type Props = {
  products: FilledCartState[];
  updateProducts: UpdateProducts;
};

export const CartCheckout: FC<Props> = ({ products, updateProducts }) => {
  const { totalQty, totalSum } = products.reduce(
    (count, el) => {
      count.totalSum += el.item.price * el.quantity;
      count.totalQty += el.quantity;

      return count;
    },
    { totalSum: 0, totalQty: 0 },
  );

  const handleClearAll = () => {
    updateProducts({ type: ActionsName.ClearAll });
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className={classes.cartCheckout}>
      <div className={classes.cartPrice}>
        <h2 className={classes.price}>{`$${totalSum}`}</h2>
        <p className={classes.totalItems}>
          {`Total for ${totalQty} ${totalQty === 1 ? 'item' : 'items'}`}
        </p>
      </div>
      <div className={classes.breakLine} />

      <Button label="Checkout" onClick={handleClearAll} />
    </div>
  );
};
