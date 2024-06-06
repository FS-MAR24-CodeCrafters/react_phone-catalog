import { useContext } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import cn from 'classnames';

import home from '../../img/icons/Home.png';
import arrowRight from '../../img/icons/Chevron(ArrowRight).png';
import classes from './CatalogPage.module.scss';
import { ProductCard } from '../../components/ProductCard';
import { PhoneStateContext } from '../../store/phoneStore/phoneContext';

export const CatalogPage = () => {
  const { phones } = useContext(PhoneStateContext);

  return (
    <div className={classes.catalog__container}>
      <div className={classes.catalog__header}>
        <div className={classes.catalog__header_way}>
          <img src={home} alt="home button" />
          <img src={arrowRight} alt="arrow right" />
          <p className={classes.catalog__header_way_name}>Phones</p>
        </div>
        <h1 className={classes.catalog__header_title}>Mobile phones</h1>
        <p className={classes.catalog__header_count}>95 models</p>
        <div className={classes.catalog__header_dropdown}>
          *Dropdown*
        </div>
      </div>
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
