import React from 'react';
import cn from 'classnames';
import classes from './CartItem.module.scss';
import minus from '../../../img/icons/Minus.png';
import plus from '../../../img/icons/Plus.png';
import close from '../../../img/icons/Close.png';
import { ActionsName, CartState } from '../../../types/cart/cartState';
import { UpdateProducts } from '../../../hooks/useCartLocalStorage';

type Props = {
  phone: CartState;
  updateProducts: UpdateProducts;
};

export const CartItem: React.FC<Props> = ({ phone, updateProducts }) => {
  const {
    image,
    id,
    name,
    price,
    fullPrice,
  } = phone.name;

  const url = `public/${image}`;

  const handleItemDelete = () => {
    updateProducts({ type: ActionsName.Remove, payload: id });
    window.dispatchEvent(new Event('storage'));
  };

  const handleItemDec = () => {
    updateProducts({ type: ActionsName.Dec, payload: id });
  };

  const handleItemInc = () => {
    updateProducts({ type: ActionsName.Inc, payload: id });
  };

  return (
    <article className={classes.cartItem}>
      <div className={classes.itemContentWrap}>
        <button className={classes.closeButton} onClick={handleItemDelete}>
          <img src={close} alt="close button" className={classes.button} />
        </button>

        <div className={classes.itemPhotoWrap}>
          <img src={url} alt={name} className={classes.itemPhoto} />
        </div>

        <p className={classes.itemTitle}>{name}</p>
      </div>

      <div className={classes.itemCounterWrap}>
        <div className={classes.itemCounter}>
          <button
            className={cn(
              classes.minusButton,
              phone.quantity > 1
                ? classes.minusButtonActive
                : classes.minusButtonDisabled,
            )}
            onClick={handleItemDec}
          >
            <img src={minus} alt="minus button" className={classes.button} />
          </button>

          <div className={classes.quantityWrap}>
            <p className={classes.quantity}>{phone.quantity}</p>
          </div>

          <button className={classes.plusButton} onClick={handleItemInc}>
            <img src={plus} alt="plus button" className={classes.button} />
          </button>
        </div>

        <div className={classes.itemPriceWrap}>
          <h3 className={classes.itemPrice}>
            {`$${phone.quantity * (price < fullPrice ? price : fullPrice)}`}
          </h3>
        </div>
      </div>
    </article>
  );
};
