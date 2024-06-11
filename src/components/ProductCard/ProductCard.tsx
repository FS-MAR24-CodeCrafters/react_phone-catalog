import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { CartDispatchContext } from '../../store/cartStore/cartContext';
import { localStorageService } from '../../service/localStorageService';
import { ActionsName } from '../../types/cart/cartState';
import { Product } from '../../types/product';
import classes from './ProductCard.module.scss';
import { Button } from '../../ui/Buttons';
import { Heart } from '../../ui/Heart';
import { KEY } from '../../constants/key';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    category,
    itemId,
    name,
    capacity,
    fullPrice,
    price,
    image,
    screen,
    ram,
  } = product;

  const { getItem, setItem, removeItem } = localStorageService(KEY);
  const hasInLocalStorage = getItem().some((item) => item.itemId === itemId);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(hasInLocalStorage);

  const imgUrl = `../../../public/${image}`;

  const formatCapacity = (memory: string): string => {
    return memory.replace(/(\d+)GB/, '$1 GB');
  };

  const formatScreenString = (screenSize: string): string => {
    return screenSize.replace(/(\d+)'/, '$1"');
  };

  const dispatch = useContext(CartDispatchContext);

  const handleAddToCart = () => {
    dispatch({
      type: ActionsName.Add,
      payload: { name: product, quantity: 1 },
    });
    setAddedToCart(!addedToCart);
  };

  const handleAddToFavorite = () => {
    if (isFavorite) {
      removeItem(itemId);
      setIsFavorite(false);
    } else {
      const data = getItem();

      data.push(product);
      setItem(data);
      setIsFavorite(true);
    }

    window.dispatchEvent(new Event('storage'));
  };

  return (
    <article className={classes.product__card}>
      <Link
        to={`/${category}/${itemId}`}
        className={classes.product__card_link}
      >
        <div className={classes.product__img_container}>
          <img src={imgUrl} alt={name} className={classes.product__img} />
        </div>

        <div>
          <p className={classes.product__title}>
            {name}
          </p>
        </div>
        <div className={classes.product__price}>
          <p className={classes.product__price_curr}>{`$${price}`}</p>
          <p
            className={cn(
              classes.product__price_curr,
              classes.product__price_disc,
            )}
          >
            {`$${fullPrice}`}
          </p>
        </div>

        <div className={classes.breackLine} />
        <div className={cn(classes.product__info, classes.paddingTop)}>
          <p className={classes.product__info_title}>Screen</p>
          <p className={classes.product__info_value}>
            {formatScreenString(screen)}
          </p>
        </div>
        <div className={classes.product__info}>
          <p className={classes.product__info_title}>Capacity</p>
          <p className={classes.product__info_value}>
            {formatCapacity(capacity)}
          </p>
        </div>
        <div className={cn(classes.product__info, classes.paddingBotton)}>
          <p className={classes.product__info_title}>RAM</p>
          <p className={classes.product__info_value}>{formatCapacity(ram)}</p>
        </div>
      </Link>

      <div className={classes.actionBlock}>
        <div style={{ flex: 1 }}>
          <Button
            label={addedToCart ? 'Added' : 'Add to cart'}
            onClick={handleAddToCart}
            addedToCart={addedToCart}
          />
        </div>
        <button
          onClick={handleAddToFavorite}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddToFavorite();
            }
          }}
        >
          <Heart checked={isFavorite} />
          {/* Heart */}
        </button>
      </div>
    </article>
  );
};
