import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { Gadget } from '../../../types/gadget';
import classes from './MainControls.module.scss';
import { Button } from '../../../ui/Buttons';
import { Heart } from '../../../ui/Heart';
import { allColors } from '../../../constants/colors';
import { CartDispatchContext } from '../../../store/cartStore/cartContext';
import { ActionsName } from '../../../types/cart/cartState';
import { Product } from '../../../types/product';
import { getGoods } from '../../../api/goods';
import { KEY } from '../../../constants/key';
import { localStorageService } from '../../../service/localStorageService';

type Props = {
  activeProduct: Gadget;
  products: Gadget[];
  onSetActiveProduct: (product: Gadget) => void;
  productName: string;
};

export const MainControls: React.FC<Props> = ({
  activeProduct,
  products,
  onSetActiveProduct,
  productName,
}) => {
  const { getItem, setItem, removeItem } = localStorageService(KEY);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [goodForCart, setGoodForCart] = useState<Product | null>(null);
  const navigate = useNavigate();

  const dispatch = useContext(CartDispatchContext);

  const capasityAvaible = activeProduct.capacityAvailable || [];
  const price = activeProduct.priceDiscount;
  const fullPrice = activeProduct.priceRegular;

  useEffect(() => {
    getGoods<Product[]>('products.json').then((res) => {
      const good = res.find((item) => item.itemId === productName) || null;

      setGoodForCart(good);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProducts = products.filter((prod) => {
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
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
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
      dispatch({
        type: ActionsName.Add,
        payload: { name: goodForCart, quantity: 1 },
      });
    }

    setAddedToCart(!addedToCart);
  };

  const handleAddToFavorite = () => {
    if (goodForCart) {
      if (isFavorite) {
        removeItem(goodForCart.itemId);

        setIsFavorite(false);

        return;
      }

      const data = getItem();

      data.push(goodForCart);
      setItem(data);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <div className={classes.colorsSection}>
        <h2>Available colors</h2>
        <div className={classes.colorsContainer}>
          {colors.map((color) => (
            <div
              key={color}
              className={classes.colorCircle}
              style={{ backgroundColor: `${allColors[color]}` }}
              onClick={() => handleSetColor(color)}
              onKeyDown={(event) => handleKeyDown(event, color)}
              role="button"
              tabIndex={0}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
      </div>

      <h2>Select capacity</h2>
      <div className={classes.capasitySection}>
        {capasityAvaible.map((cap) => (
          <div
            key={cap}
            className={classes.capasityContainer}
            onClick={() => handleSetCapasity(cap)}
            onKeyDown={(event) => handleKeyDown(event, cap)}
            role="button"
            tabIndex={0}
            aria-label={`Select capacity ${cap}`}
          >
            {cap}
          </div>
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
              label={addedToCart ? 'Added to cart' : 'Add to cart'}
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
