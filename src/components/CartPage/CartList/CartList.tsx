import { FC } from 'react';
import { CartItem } from '../CartItem';
import { UpdateProducts } from '../../../hooks/useCartLocalStorage';
import { FilledCartState } from '../../../types/cart/cartState';

import classes from './CartList.module.scss';

type Props = {
  products: FilledCartState[];
  updateProducts: UpdateProducts;
};

export const CartList: FC<Props> = ({ products, updateProducts }) => {
  return (
    <div className={classes.cartList}>
      {products.map((product) => (
        <CartItem
          key={product.item.id}
          phone={product}
          updateProducts={updateProducts}
        />
      ))}
    </div>
  );
};
