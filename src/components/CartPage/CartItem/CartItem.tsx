import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import cn from 'classnames';
import classes from './CartItem.module.scss';
import minus from '../../../img/icons/Minus.png';
import plus from '../../../img/icons/Plus.png';
import close from '../../../img/icons/Close.png';
import { ActionsName, CartState } from '../../../types/cart/cartState';
import { CartDispatchContext } from '../../../store/cartStore/cartContext';

type Props = {
  phone: CartState;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const dispatch = useContext(CartDispatchContext);

  const {
    image,
    id,
    name,
    price,
    fullPrice,
    category,
    itemId,
  } = phone.name;

  const url = `public/${image}`;

  const handleItemDelete = () => {
    dispatch({ type: ActionsName.Remove, payload: id });
  };

  const handleItemDec = () => {
    dispatch({ type: ActionsName.Dec, payload: id });
  };

  const handleItemInc = () => {
    dispatch({ type: ActionsName.Inc, payload: id });
  };

  return (
    <article className={classes.cartItem}>
      <div className={classes.itemContentWrap}>
        <button className={classes.closeButton} onClick={handleItemDelete}>
          <img src={close} alt="close button" className={classes.button} />
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
          <h3 className={classes.itemPrice}>{`$${phone.quantity * (price < fullPrice ? price : fullPrice)}`}</h3>
        </div>
      </div>
    </article>
  );
};
