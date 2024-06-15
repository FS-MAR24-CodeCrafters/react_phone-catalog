import { Link } from 'react-router-dom';
import { FC } from 'react';
import error from '../../img/product-not-found.png';

import classes from './NoGoodsScreen.module.scss';

type NoGoodsScreenProps = {
  title: string;
};

export const NoGoodsScreen: FC<NoGoodsScreenProps> = ({ title }) => {
  return (
    <section className={classes.error}>
      <div className={classes.container}>
        <div className={classes.img__wrapper}>
          <img
            src={error}
            alt="There are no such goods"
            className={classes.img}
          />
        </div>
        <p className={classes.title}>{title}</p>
        <Link to="/" className={classes.button}>
          Home Page
        </Link>
      </div>
    </section>
  );
};
