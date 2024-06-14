import { Link } from 'react-router-dom';
import cn from 'classnames';

import { ActionsName } from '../../types/cart/cartState';
import { Product } from '../../types/product';
import classes from './ProductCard.module.scss';
import { Button } from '../../ui/Buttons';
import { Heart } from '../../ui/Heart';
import { useFavouriteLocalStorage } from '../../hooks/useFavouriteLocalStorage';
import { FavouritesActionsName } from '../../types/favourite/favouriteState';
import { useCartLocalStorage } from '../../hooks/useCartLocalStorage';

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

  const { favourites, updateFavourites } = useFavouriteLocalStorage();
  const { goodsInCart, updateProducts } = useCartLocalStorage();

  const hasInFavourites = favourites.some((item) => item.itemId === itemId);
  const hasInCart = goodsInCart.some((item) => item.id === itemId);

  const imgUrl = `./${image}`;

  const formatCapacity = (memory: string): string => {
    return memory.replace(/(\d+)GB/, '$1 GB');
  };

  const formatScreenString = (screenSize: string): string => {
    return screenSize.replace(/(\d+)'/, '$1"');
  };

  const handleAddToCart = () => {
    if (hasInCart) {
      updateProducts({
        type: ActionsName.Remove,
        payload: product.itemId,
      });
    } else {
      updateProducts({
        type: ActionsName.Add,
        payload: { id: product.itemId, quantity: 1 },
      });
    }

    window.dispatchEvent(new Event('storage'));
  };

  const handleAddToFavorite = () => {
    if (hasInFavourites) {
      updateFavourites({
        type: FavouritesActionsName.Remove,
        payload: product,
      });
    } else {
      updateFavourites({ type: FavouritesActionsName.Add, payload: product });
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
          <p className={classes.product__title}>{name}</p>
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

        <div className={classes.breakLine} />
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
            label={hasInCart ? 'Added' : 'Add to cart'}
            onClick={handleAddToCart}
            addedToCart={hasInCart}
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
          <Heart checked={hasInFavourites} />
          {/* Heart */}
        </button>
      </div>
    </article>
  );
};
