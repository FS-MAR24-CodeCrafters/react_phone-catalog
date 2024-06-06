// import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Phone } from '../../types/phones/phone';
import classes from './ProductCard.module.scss';
import { Button } from '../../ui/Buttons';
import { Heart } from '../../ui/Heart';

type Props = {
  product: Phone;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    capacity,
    priceRegular,
    priceDiscount,
    images,
    screen,
    ram,
  } = product;

  const imgUrl = `../../../public/${images[0]}`;

  const formatCapacity = (memory: string): string => {
    return memory.replace(/(\d+)GB/, '$1 GB');
  };

  const formatScreenString = (screenSize: string): string => {
    return screenSize.replace(/(\d+)'/, '$1"');
  };

  return (
    <article className={classes.product__card}>
      <Link to="" className={classes.product__card_link}>
        <div className={classes.product__img_container}>
          <img
            src={imgUrl}
            alt={name}
            className={classes.product__img}
          />
        </div>

        <p className={classes.product__title}>
          {name}
        </p>
        <div className={classes.product__price}>
          <p className={classes.product__price_curr}>{`$${priceDiscount}`}</p>
          <p
            className={cn(
              classes.product__price_curr,
              classes.product__price_disc,
            )}
          >
            {`$${priceRegular}`}
          </p>
        </div>

        <div className={classes.breackLine} />
        <div className={cn(classes.product__info, classes.paddingTop)}>
          <p className={classes.product__info_title}>Screen</p>
          <p className={classes.product__info_value}>{formatScreenString(screen)}</p>
        </div>
        <div className={classes.product__info}>
          <p className={classes.product__info_title}>Capacity</p>
          <p className={classes.product__info_value}>{formatCapacity(capacity)}</p>
        </div>
        <div className={cn(classes.product__info, classes.paddingBotton)}>
          <p className={classes.product__info_title}>RAM</p>
          <p className={classes.product__info_value}>{formatCapacity(ram)}</p>
        </div>
      </Link>

      <div className={classes.actionBlock}>
        <div style={{ flex: 1 }}>
          <Button label="Add to cart" />
        </div>
        <Heart checked={false} />
      </div>
    </article>
  );
};
