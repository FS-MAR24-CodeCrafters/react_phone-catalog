import { useState } from 'react';
import { createPortal } from 'react-dom';
import { CartCheckout } from '../../components/CartPage/CartChekout';
import { CartList } from '../../components/CartPage/CartList';
import { CartEmpty } from '../../components/CartPage/CartEmpty';
import { CartTitle } from '../../components/CartPage/CartTitle';
import { useCartLocalStorage } from '../../hooks/useCartLocalStorage';
import { ErrorMessage } from '../../components/ErrorMessage';
import { ErrorScreen } from '../../components/ErrorScreen';
import { useProductReqHandler } from '../../hooks/useProductReqHandler';
import { SkeletonCartList } from '../../components/Skeletons/SkeletonCartPage/CartList';
import { SkeletonCartCheckout } from '../../components/Skeletons/SkeletonCartPage/CartChekout';
import { Back } from '../../components/Back';
import { CartForm } from '../../components/CartPage/CartForm';
import type { FilledCartState } from '../../types/cart/cartState';
import classes from './CartPage.module.scss';

export const CartPage = () => {
  const {
    loading, products, openModal, error, setError, setOpenModal,
  } = useProductReqHandler();
  const [formOpen, setFormOpen] = useState(false);

  const { goodsInCart, updateProducts } = useCartLocalStorage();

  if (!loading && !goodsInCart.length) {
    return (
      <CartEmpty />
    );
  }

  const filteredGoods: FilledCartState[] = products
    .filter((product) => {
      return goodsInCart.some((good) => good.id === product.itemId);
    })
    .map((good) => {
      const qty = goodsInCart.find((item) => item.id === good.itemId)?.quantity || 1;

      return {
        item: good,
        quantity: qty,
      };
    });

  if (error) {
    return (
      <div style={{ gridColumn: '1 / -1' }}>
        <ErrorScreen setError={setError} />
      </div>
    );
  }

  return (
    <div className={classes.cartPage}>
      <div className={classes.backWrap}>
        <Back />

        <div className={classes.wrap}>
          <CartTitle />
          {loading ? (
            <div className={classes.contentWrap}>
              <SkeletonCartList />
              <SkeletonCartCheckout />
            </div>
          ) : (
            <div className={classes.contentWrap}>
              <CartList
                products={filteredGoods}
                updateProducts={updateProducts}
              />
              <CartCheckout
                products={filteredGoods}
                setFormOpen={setFormOpen}
              />
              {formOpen && (
              <CartForm
                setFormOpen={setFormOpen}
                products={filteredGoods}
                updateProducts={updateProducts}
              />
              )}
            </div>
          )}

          {openModal
            && createPortal(
              <ErrorMessage setOpenModal={setOpenModal} />,
              document.body,
            )}
        </div>
      </div>
    </div>
  );
};
