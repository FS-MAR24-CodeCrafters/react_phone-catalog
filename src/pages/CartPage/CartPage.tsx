import { CartCheckout } from '../../components/CartPage/CartChekout';
import { CartList } from '../../components/CartPage/CartList';
import classes from './CartPage.module.scss';
import { CartEmpty } from '../../components/CartPage/CartEmpy';
import { CartTitle } from '../../components/CartPage/CartTitle';
import { useCartLocalStorage } from '../../hooks/useCartLocalStorage';

export const CartPage = () => {
  const { products, updateProducts } = useCartLocalStorage();

  return (
    <div className={classes.wrap}>
      <CartTitle />
      {products.length ? (
        <div className={classes.contentWrap}>
          <CartList products={products} updateProducts={updateProducts} />
          <CartCheckout products={products} updateProducts={updateProducts} />
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};
