import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getGoods } from '../../api/goods';
import { Gadget } from '../../types/gadget';
import { PhotosBlock } from '../../components/ItemCardPage/PhotosBlock/PhotosBlock';
import { MainControls } from '../../components/ItemCardPage/MainControls/MainControls';

import classes from './ItemCard.module.scss';
import { About } from '../../components/ItemCardPage/About';
import { TechSpecs } from '../../components/ItemCardPage/TechSpecs/TechSpecs';

export const ItemCardPage = () => {
  const [products, setProducts] = useState<Gadget[]>([]);

  const [activeProduct, setActiveProduct] = useState<Gadget | null>(null);

  const { pathname } = useLocation();

  const locationArr = pathname.split('/');
  const productName = locationArr[1];
  const ident = locationArr[2];

  window.console.log(ident);

  useEffect(() => {
    getGoods<Gadget[]>(`${productName}.json`).then((resp) => {
      setProducts(resp);
      const initialProduct = resp.find((elem) => elem.id === ident);

      if (initialProduct) {
        setActiveProduct(initialProduct);
      }
    });
  }, [productName, ident]);

  const handleSetActiveProduct = (product: Gadget) => {
    setActiveProduct(product);
  };

  return (
    <>
      <h1 className={classes.header1}>{activeProduct?.name}</h1>

      {activeProduct !== null && (
        <div className={classes.textSection}>
          <div className={classes.characteristicsSection}>
            <PhotosBlock product={activeProduct} ident={ident} />
            <MainControls
              activeProduct={activeProduct}
              ident={ident}
              products={products}
              onSetActiveProduct={handleSetActiveProduct}
              productName={productName}
            />
          </div>
          <div className={classes.aboutSection}>
            <About product={activeProduct} />
            <TechSpecs product={activeProduct} />
          </div>
        </div>
      )}
    </>
  );
};
