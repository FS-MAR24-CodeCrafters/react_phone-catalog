import { FC } from 'react';
import classes from './CartList.module.scss';
import { CartItem } from '../CartItem';
import { UpdateProducts } from '../../../hooks/useCartLocalStorage';
import { FilledCartState } from '../../../types/cart/cartState';

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
