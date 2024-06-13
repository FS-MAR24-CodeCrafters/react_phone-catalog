import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { Gadget } from '../../../types/gadget';
import classes from './MainControls.module.scss';
import { Button } from '../../../ui/Buttons';
import { Heart } from '../../../ui/Heart';
import { allColors } from '../../../constants/colors';
import { ActionsName } from '../../../types/cart/cartState';
import { Product } from '../../../types/product';
import { FavouritesActionsName } from '../../../types/favourite/favouriteState';
import { useCartLocalStorage } from '../../../hooks/useCartLocalStorage';
import { useFavouriteLocalStorage } from '../../../hooks/useFavouriteLocalStorage';
import { ItemColor } from '../../../ui/ItemColor';

type Props = {
  activeProduct: Gadget;
  gadgets: Gadget[];
  onSetActiveProduct: (product: Gadget) => void;
  productName: string;
  goodForCart: Product | null;
};

export const MainControls: React.FC<Props> = ({
  activeProduct,
  gadgets,
  onSetActiveProduct,
  productName,
  goodForCart,
}) => {
  const { favourites, updateFavourites } = useFavouriteLocalStorage();
  const { products: cart, updateProducts } = useCartLocalStorage();

  const [goodForCart, setGoodForCart] = useState<Product | null>(null);
  const navigate = useNavigate();

  const hasInFavourites = favourites.some(
    (item) => item.itemId === activeProduct.id,
  );
  const hasInCart = cart.some((item) => item.name.itemId === activeProduct.id);

  const capasityAvaible = activeProduct.capacityAvailable || [];
  const price = activeProduct.priceDiscount;
  const fullPrice = activeProduct.priceRegular;

  const filteredProducts = gadgets.filter((prod) => {
    return prod.namespaceId === activeProduct.namespaceId;
  });

  const colors = activeProduct.colorsAvailable;

  const handleSetColor = (color: string) => {
    const neededProduct = filteredProducts.find((prod) => prod.id.includes(color));

    if (neededProduct) {
      navigate(`/${productName}/${neededProduct.id}`);
      onSetActiveProduct(neededProduct);
    }
  };

  const handleSetCapasity = (cap: string) => {
    const neededProduct = filteredProducts.find((prod) => {
      return prod.capacity === cap && prod.color === activeProduct.color;
    });

    if (neededProduct) {
      navigate(`/${productName}/${neededProduct.id}`);
      onSetActiveProduct(neededProduct);
      setSelectedCap(cap);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    colorOrCap: string,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      if (colors.includes(colorOrCap)) {
        handleSetColor(colorOrCap);
      } else {
        handleSetCapasity(colorOrCap);
      }
    }
  };

  const handleAddToCart = () => {
    if (goodForCart) {
      if (hasInCart) {
        updateProducts({
          type: ActionsName.Remove,
          payload: goodForCart.id,
        });
      } else {
        updateProducts({
          type: ActionsName.Add,
          payload: { name: goodForCart, quantity: 1 },
        });
      }
    }

    window.dispatchEvent(new Event('storage'));
  };

  const handleAddToFavorite = () => {
    if (goodForCart) {
      if (hasInFavourites) {
        updateFavourites({
          type: FavouritesActionsName.Remove,
          payload: goodForCart,
        });
      } else {
        updateFavourites({
          type: FavouritesActionsName.Add,
          payload: goodForCart,
        });
      }
    }

    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div>
      <div className={classes.colorsSection}>
        <h2>Available colors</h2>
        <div className={classes.colorsContainer}>
          {colors.map((color) => (
            <button
              onClick={() => handleSetColor(color)}
              onKeyDown={(event) => handleKeyDown(event, color)}
              aria-label={`Select color ${color}`}
            >
              <ItemColor
                key={color}
                itemColor={allColors[color]}
                selected={activeProduct.color === color}
              />
            </button>
          ))}
        </div>
      </div>

      <h2>Select capacity</h2>
      <div className={classes.capasitySection}>
        {capasityAvaible.map((cap) => (
          <button
            key={cap}
            className={cn(classes.capasityContainer, {
              [classes.selectedCap]: selectedCap === cap,
            })}
            onClick={() => handleSetCapasity(cap)}
            onKeyDown={(event) => handleKeyDown(event, cap)}
            aria-label={`Select capacity ${cap}`}
          >
            {cap}
          </button>
        ))}
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

      <div className={classes.actionBlock}>
        <div className={classes.buttonContainer}>
          <div style={{ flex: 1 }}>
            <Button
              label={hasInCart ? 'Added to cart' : 'Add to cart'}
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
            aria-label='Add to favourites'
          >
            <Heart checked={hasInFavourites} />
            {/* Heart */}
          </button>
        </div>
      </div>
      <div>
        <div className={classes.characteristicsContainer}>
          <p>Screen</p>
          <p className={classes.primaryText}>{activeProduct?.screen}</p>
        </div>
        <div className={classes.characteristicsContainer}>
          <p>Resolution</p>
          <p className={classes.primaryText}>{activeProduct?.resolution}</p>
        </div>
        <div className={classes.characteristicsContainer}>
          <p>Processor</p>
          <p className={classes.primaryText}>{activeProduct?.processor}</p>
        </div>
        <div className={classes.characteristicsContainer}>
          <p>RAM</p>
          <p className={classes.primaryText}>{activeProduct?.ram}</p>
        </div>
      </div>
    </div>
  );
};
