import { FC } from 'react';

import classes from './SecondarySlider.module.scss';
import { ProductCard } from '../../ProductCard';
import { Phone } from '../../../types/phones/phone';
import { Arrow } from '../../../ui/Arrow/Arrow';
import { arrowDir } from '../../../types/arrowEnum';

type SecondarySliderProps = {
  title: string;
  products: Phone[];
};

export const SecondarySlider: FC<SecondarySliderProps> = ({
  title,
  products,
}) => {
  return (
    <section className={classes.slider}>
      <div className={classes.slider__header}>
        <h2 className={classes.slider__title}>{title}</h2>
        <div className={classes.slider__buttons}>
          <Arrow dir={arrowDir.left} disabled={false} />
          <Arrow dir={arrowDir.right} disabled={false} />
        </div>
      </div>
      <div className={classes.slider__wrapper}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};
