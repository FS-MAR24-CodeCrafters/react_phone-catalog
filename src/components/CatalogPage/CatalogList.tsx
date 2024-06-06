import { useContext } from 'react';

import classes from './CatalogList.module.scss';
import { ProductCard } from '../ProductCard';
import { PhoneStateContext } from '../../store/phoneStore/phoneContext';

export const CatalogList = () => {
  const { phones } = useContext(PhoneStateContext);

  return (
    <div className={classes.catalog__container}>
      <div className={classes.catalog__main}>
        {phones.map((phone) => (
          <div className={classes.catalog__item}>
            <ProductCard product={phone} />
          </div>
        ))}
      </div>
      <div className={classes.catalog__footer}>
        <h2>123</h2>
      </div>
    </div>
  );
};
