import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getGoods } from '../../api/goods';
import { Gadget } from '../../types/gadget';
import { PhotosBlock } from '../../components/ItemCardPage/PhotosBlock/PhotosBlock';
import { MainControls } from '../../components/ItemCardPage/MainControls/MainControls';

import classes from './ItemCard.module.scss';
import { About } from '../../components/ItemCardPage/About';
import { TechSpecs } from '../../components/ItemCardPage/TechSpecs/TechSpecs';
import { ProductNotFound } from '../../components/ItemCardPage/ProductNotFound';

export const ItemCardPage = () => {
  const [products, setProducts] = useState<Gadget[]>([]);

  const [activeProduct, setActiveProduct] = useState<Gadget | null>(null);

  const { pathname } = useLocation();

  const locationArr = pathname.split('/');
  const category = locationArr[1];
  const productName = locationArr[2];

  useEffect(() => {
    getGoods<Gadget[]>(`${category}.json`).then((resp) => {
      setProducts(resp);
      const initialProduct = resp.find((elem) => elem.id === productName);

      if (initialProduct) {
        setActiveProduct(initialProduct);
      } else {
        setActiveProduct(null);
      }
    });
  }, [category, productName, pathname]);

  const handleSetActiveProduct = (product: Gadget) => {
    setActiveProduct(product);
  };

  if (!activeProduct) {
    return (
      <>
        <h1 className={classes.header1}>There is no such Product</h1>
        <ProductNotFound />
      </>
    );
  }

  return (
    <>
      <h1 className={classes.header1}>{activeProduct.name}</h1>
      <div className={classes.textSection}>
        <div className={classes.characteristicsSection}>
          <PhotosBlock product={activeProduct} ident={productName} />
          <MainControls
            activeProduct={activeProduct}
            products={products}
            onSetActiveProduct={handleSetActiveProduct}
            productName={category}
          />
        </div>
        <div className={classes.aboutSection}>
          <About product={activeProduct} />
          <TechSpecs product={activeProduct} />
        </div>
      </div>
    </>
  );
};
