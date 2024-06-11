// import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import cn from 'classnames';
import { Gadget } from '../../../types/gadget';
import classes from './MainControls.module.scss';
import { Button } from '../../../ui/Buttons';
import { Heart } from '../../../ui/Heart';
// import { CartDispatchContext } from '../../../store/cartStore/cartContext';
// import { ActionsName } from '../../../types/cart/cartState';

type Props = {
  activeProduct: Gadget;
  products: Gadget[];
  ident?: string;
  onSetActiveProduct: (product: Gadget) => void;
  productName: string;
};

export const MainControls: React.FC<Props> = ({
  activeProduct,
  products,
  onSetActiveProduct,
  productName,
}) => {
  const navigate = useNavigate();

  // const lastDashIndex = ident.lastIndexOf('-');
  // const identWitoutColor = ident.substring(0, lastDashIndex);
  const capasityAvaible = activeProduct.capacityAvailable || [];
  const price = activeProduct.priceDiscount;
  const fullPrice = activeProduct.priceRegular;

  const filteredProducts = products.filter((prod) => {
    return prod.namespaceId === activeProduct.namespaceId;
  });

  const colors = activeProduct.colorsAvailable;

  // window.console.log(setActiveProduct);
  window.console.log(filteredProducts);

  const handleSetColor = (color: string) => {
    const neededProduct = filteredProducts.find((prod) => prod.id.includes(color));

    if (neededProduct) {
      navigate(`/${productName}/${neededProduct.id}`);
      // setActiveProduct(neededProduct);
      onSetActiveProduct(neededProduct);
    }
  };

  const handleSetCapasity = (cap: string) => {
    const neededProduct = filteredProducts.find(
      (prod) => {
        window.console.log(prod.capacity);

        return prod.capacity === cap && prod.color === activeProduct.color;
      },
    );

    if (neededProduct) {
      navigate(`/${productName}/${neededProduct.id}`);
      // setActiveProduct(neededProduct);
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

  return (
    <div>
      <div className={classes.colorsSection}>
        <h2>Available colors</h2>
        <div className={classes.colorsContainer}>
          {colors.map((color) => (
            <div
              key={color}
              className={classes.colorCircle}
              style={{ backgroundColor: color }}
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
            <Button label={true ? 'Added to cart' : 'Add to cart'} />
          </div>
        </div>
        <button>
          <Heart checked={false} />
          {/* Heart */}
        </button>
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
