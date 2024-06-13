import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SecondarySlider } from '../../components/Sliders/SecondarySlider';
import { getGoods } from '../../api/goods';
import { Product } from '../../types/product';

import classes from './HomePage.module.scss';
import { Category } from '../../components/HomePage/Category';
import { MainSlider } from '../../components/HomePage/MainSlider';
import { ErrorMessage } from '../../components/ErrorMessage';

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getGoods<Product[]>('products.json')
      .then((res) => {
        setProducts(res);
      })
      .catch(() => {
        setError(true);
        setOpenModal(true);
      });
  }, [error]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (openModal) {
      timer = setTimeout(() => {
        setOpenModal(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [openModal]);

  const hotPrices = products.sort((a, b) => {
    return b.price - a.price;
  });

  const brandNewModels = products.sort((a, b) => b.year - a.year);

  const hotPricesFirst20 = hotPrices.filter((item, i) => i <= 20);
  const brandNewModels20 = brandNewModels.filter((item, i) => i <= 20);

  return (
    <>
      <h1 className={classes.hidden}>Product Catalog</h1>
      <div className={classes.title__container}>
        <h2 className={classes.title}>Welcome to Nice Gadget store!</h2>
      </div>
      <div className={`${classes.slider__container} ${classes.mb}`}>
        <MainSlider />
      </div>

      <div className={`${classes.slider__container} ${classes.mb}`}>
        <SecondarySlider
          title="Brand new models"
          products={brandNewModels20}
          error={error}
          setError={setError}
        />
      </div>

      <div className={`${classes.container} ${classes.mb}`}>
        <Category />
      </div>

      <div className={`${classes.slider__container} ${classes.mb}`}>
        <SecondarySlider
          title="Hot prices"
          products={hotPricesFirst20}
          error={error}
          setError={setError}
        />
      </div>

      {openModal
        && createPortal(
          <ErrorMessage setOpenModal={setOpenModal} />,
          document.body,
        )}
    </>
  );
};
