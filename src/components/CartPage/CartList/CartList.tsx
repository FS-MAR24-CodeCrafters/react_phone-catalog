import { useContext, useEffect } from 'react';
import classes from './CartList.module.scss';
import { CartItem } from '../CartItem';
import { getGoods } from '../../../api/goods';
import { Product } from '../../../types/product';
import { CartDispatchContext, CartStateContext } from '../../../store/cartStore/cartContext';
import { ActionsName } from '../../../types/cart/cartState';

export const CartList = () => {
  const dispatch = useContext(CartDispatchContext);
  const cart = useContext(CartStateContext);

  useEffect(() => {
    getGoods<Product[]>('products.json').then((res) => {
      dispatch({
        type: ActionsName.Add,
        payload: { name: res[0], quantity: 1 },
      });

      dispatch({
        type: ActionsName.Add,
        payload: { name: res[1], quantity: 1 },
      });

      dispatch({
        type: ActionsName.Add,
        payload: { name: res[2], quantity: 1 },
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cart.length) {
    return <p>The Cart is empty</p>;
  }

  return (
    <div className={classes.cartList}>
      {cart.map((product) => (
        <CartItem phone={product} key={product.name.id} />
      ))}
    </div>
  );
};
