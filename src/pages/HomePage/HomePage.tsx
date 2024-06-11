import { useEffect, useState } from 'react';
import { SecondarySlider } from '../../components/Sliders/SecondarySlider';
import { getGoods } from '../../api/goods';
import { Product } from '../../types/product';

import classes from './HomePage.module.scss';
import { Category } from '../../components/HomePage/Category';
import { MainSlider } from '../../components/HomePage/MainSlider';

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getGoods<Product[]>('products.json').then((res) => {
      setProducts(res);
    });
  }, []);

  const hotPrices = products.sort((a, b) => {
    return b.price - a.price;
  });

  const brandNewModels = products.sort((a, b) => b.year - a.year);

  const hotPricesFirst20 = hotPrices.filter((item, i) => i <= 20);
  const brandNewModels20 = brandNewModels.filter((item, i) => i <= 20);

  return (
    <>
      <h1 className={classes.hidden}>Product Catalog</h1>

      <div className={`${classes.slider__container} ${classes.mb}`}>
        <MainSlider />
      </div>

      <div className={`${classes.slider__container} ${classes.mb}`}>
        <SecondarySlider title="Brand new models" products={brandNewModels20} />
      </div>

      <div className={`${classes.container} ${classes.mb}`}>
        <Category />
      </div>

      <div className={`${classes.slider__container} ${classes.mb}`}>
        <SecondarySlider title="Hot prices" products={hotPricesFirst20} />
      </div>
    </>
  );
};
