import cn from 'classnames';

import classes from './ProductCard.module.scss';
import iphone from '../../../public/img/phones/apple-iphone-xs/gold/00.webp';

export function ProductCard() {
  return (
    <article className={classes.product__card}>
      <div className={classes.product__img_container}>
        <img
          src={iphone}
          alt="apple-iphone-xs"
          className={classes.product__img}
        />
      </div>

      <p className={classes.product__title}>Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</p>
      <div className={classes.product__price}>
        <p className={classes.product__price_curr}>$799</p>
        <p className={cn(classes.product__price_curr, classes.product__price_disc)}>$899</p>
      </div>

      <div className={classes.breackLine} />
      <div className={cn(classes.product__info, classes.paddingTop)}>
        <p className={classes.product__info_title}>Screen</p>
        <p className={classes.product__info_value}>5.8&rdquo; OLED</p>
      </div>
      <div className={classes.product__info}>
        <p className={classes.product__info_title}>Capacity</p>
        <p className={classes.product__info_value}>64 GB</p>
      </div>
      <div className={cn(classes.product__info, classes.paddingBotton)}>
        <p className={classes.product__info_title}>RAM</p>
        <p className={classes.product__info_value}>4 GB</p>
      </div>

      {/* buttons */}
    </article>
  );
}
