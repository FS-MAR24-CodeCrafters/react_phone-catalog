import { useContext } from 'react';
import classes from './CartList.module.scss';
import { CartItem } from '../CartItem';
import { CartStateContext } from '../../../store/cartStore/cartContext';

export const CartList = () => {
  const cart = useContext(CartStateContext);

  return (
    <div className={classes.cartList}>
      {cart.map((product) => (
        <CartItem phone={product} key={product.name.id} />
      ))}
    </div>
  );
};
