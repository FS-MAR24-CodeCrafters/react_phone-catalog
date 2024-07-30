import { Link } from 'react-router-dom';
import React from 'react';
import cn from 'classnames';
import { ActionsName, FilledCartState } from '../../../types/cart/cartState';
import { UpdateProducts } from '../../../hooks/useCartLocalStorage';
import { PlusIcon } from '../../../ui/icons/PlusIcon';
import { MinusIcon } from '../../../ui/icons/MinusIcon';

import classes from './CartItem.module.scss';
import { CloseIcon } from '../../../ui/icons/CloseIcon';

type Props = {
  phone: FilledCartState;
  updateProducts: UpdateProducts;
};

export const CartItem: React.FC<Props> = ({ phone, updateProducts }) => {
  const {
    image, name, price, fullPrice, category, itemId,
  } = phone.item;

  const url = `./${image}`;

  const handleItemDelete = () => {
    updateProducts({ type: ActionsName.Remove, payload: itemId });
    window.dispatchEvent(new Event('storage'));
  };

  const handleItemDec = () => {
    updateProducts({ type: ActionsName.Dec, payload: itemId });
  };

  const handleItemInc = () => {
    updateProducts({ type: ActionsName.Inc, payload: itemId });
  };

  return (
    <article className={classes.cartItem}>
      <div className={classes.itemContentWrap}>
        <button
          className={classes.closeButton}
          onClick={handleItemDelete}
          aria-label="Delete good from cart"
        >
          <CloseIcon className={classes.button} />
        </button>
        <Link to={`/${category}/${itemId}`}>
          <div className={classes.itemPhotoWrap}>
            <img src={url} alt={name} className={classes.itemPhoto} />
          </div>
        </Link>
        <Link to={`/${category}/${itemId}`}>
          <p className={classes.itemTitle}>{name}</p>
        </Link>
      </div>

      <div className={classes.itemCounterWrap}>
        <div className={classes.itemCounter}>
          <button
            className={cn(
              classes.minusButton,
              phone.quantity > 1 ?
                classes.minusButtonActive :
                classes.minusButtonDisabled,
            )}
            onClick={handleItemDec}
            aria-label="Decrease quantity"
          >
            <MinusIcon className={classes.button} />
          </button>

          <div className={classes.quantityWrap}>
            <p className={classes.quantity}>{phone.quantity}</p>
          </div>

          <button
            className={classes.plusButton}
            onClick={handleItemInc}
            aria-label="Increase quantity"
          >
            <PlusIcon className={classes.button} />
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
