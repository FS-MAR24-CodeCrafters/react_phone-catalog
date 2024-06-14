import { useState } from 'react';
import { CartCheckout } from '../../components/CartPage/CartChekout';
import { CartList } from '../../components/CartPage/CartList';
import { CartEmpty } from '../../components/CartPage/CartEmpy';
import { CartTitle } from '../../components/CartPage/CartTitle';
import { useCartLocalStorage } from '../../hooks/useCartLocalStorage';
import { Back } from '../../components/Back';
import { CartForm } from '../../components/CartPage/CartForm';
import classes from './CartPage.module.scss';

export const CartPage = () => {
  const { products, updateProducts } = useCartLocalStorage();

  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className={classes.cartPage}>
      <div className={classes.backWrap}>
        <Back />
      </div>
      <div className={classes.wrap}>
        <CartTitle />
        {products.length ? (
          <div className={classes.contentWrap}>
            <CartList products={products} updateProducts={updateProducts} />
            <CartCheckout
              setFormOpen={setFormOpen}
              products={products}
            />
            {formOpen && <CartForm setFormOpen={setFormOpen} />}
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};
