import React, { useContext } from 'react';
import classes from './CartItem.module.scss';
// import iphone from '../../../public/img/phones/apple-iphone-11-pro-max/gold/00.webp';
import minus from '../../../img/icons/Minus.png';
import plus from '../../../img/icons/Plus.png';
import close from '../../../img/icons/Close.png';
import { ActionsName, CartState } from '../../../types/cart/cartState';
import { CartDispatchContext } from '../../../store/cartStore/cartContext';

type Props = {
  phone: CartState;
}

export const CartItem: React.FC<Props> = ({ phone }) => {
  const dispatch = useContext(CartDispatchContext);

  const { image, id } = phone.name;

  const url = `public/${image}`;

  const handleItemDelete = () => {
    dispatch({ type: ActionsName.Remove, payload: id });
  };

  return (
    <article className={classes.cartItem}>
      <div className={classes.itemContentWrap}>
        <button
          className={classes.closeButton}
          onClick={handleItemDelete}
          onKeyDown={(e) => {
            if (e.key === 'enter') {
              handleItemDelete();
            }
          }}
        >
          <img src={close} alt="close button" className={classes.button} />
        </button>

        <div className={classes.itemPhotoWrap}>
          <img
            src={url}
            alt="Apple iPhone 11 Pro Max 64GB Gold"
            className={classes.itemPhoto}
          />
        </div>

        <p className={classes.itemTitle}>
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </p>
      </div>

      <div className={classes.itemCounterWrap}>
        <div className={classes.itemCounter}>
          <div className={classes.minusButton}>
            <img src={minus} alt="minus button" className={classes.button} />
          </div>

          <div className={classes.quantityWrap}>
            <p className={classes.quantity}>1</p>
          </div>

          <div className={classes.plusButton}>
            <img src={plus} alt="plus button" className={classes.button} />
          </div>
        </div>

        <div className={classes.itemPriceWrap}>
          <h3 className={classes.itemPrice}>$1099</h3>
        </div>
      </div>
    </article>
  );
};
