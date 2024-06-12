import { useContext, useState } from 'react';
import { CartCheckout } from '../../components/CartPage/CartChekout';
import { CartList } from '../../components/CartPage/CartList';
import { CartStateContext } from '../../store/cartStore/cartContext';
import classes from './CartPage.module.scss';
import { CartEmpty } from '../../components/CartPage/CartEmpy';
import { CartTitle } from '../../components/CartPage/CartTitle';
import { Back } from '../../components/Back';
import { CartForm } from '../../components/CartPage/CartForm';

export const CartPage = () => {
  const cart = useContext(CartStateContext);

  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className={classes.cartPage}>
      <div className={classes.backWrap}>
        <Back />
      </div>
      <div className={classes.wrap}>
        <CartTitle />
        {cart.length ? (
          <div className={classes.contentWrap}>
            <CartList />
            <CartCheckout setFormOpen={setFormOpen} />
            {formOpen && <CartForm setFormOpen={setFormOpen} />}
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};
