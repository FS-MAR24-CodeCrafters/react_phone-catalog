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
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { Product } from '../../types/product';
import { SecondarySlider } from '../../components/Sliders/SecondarySlider';
import { Skeleton } from '../../components/SkeletonItemCardPage/SkeletonItemCardPage';

export const ItemCardPage = () => {
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeProduct, setActiveProduct] = useState<Gadget | null>(null);

  const { pathname } = useLocation();

  const locationArr = pathname.split('/');
  const category = locationArr[1];
  const productName = locationArr[2];

  useEffect(() => {
    const productReq = getGoods<Product[]>('products.json');
    const gadget = getGoods<Gadget[]>(`${category}.json`);

    Promise.all([productReq, gadget])
      .then(([productRes, gadgetRes]) => {
        setGadgets(gadgetRes);
        setProducts(productRes);

        const initialProduct = gadgetRes.find((elem) => elem.id === productName);

        if (initialProduct) {
          setActiveProduct(initialProduct);
        } else {
          setActiveProduct(null);
        }
      });

    /* getGoods<Gadget[]>(`${category}.json`).then((resp) => {
      setGadgets(resp);
      const initialProduct = resp.find((elem) => elem.id === productName);

      if (initialProduct) {
        setActiveProduct(initialProduct);
      } else {
        setActiveProduct(null);
      }
    }); */
  }, [category, productName, pathname]);

  const handleSetActiveProduct = (newProduct: Gadget) => {
    setActiveProduct(newProduct);
  };

  if (!gadgets.length) {
    return <Skeleton />;
  }

  if (!activeProduct) {
    return (
      <>
        <h1 className={classes.header1}>There is no such Product</h1>
        <ProductNotFound />
      </>
    );
  }

  const goodForCart = products.find((item) => item.itemId === productName) || null;

  return (
    <>
      <div className={classes.textSection}>
        <div className={classes.breadCrumbsContainer}>
          <BreadCrumbs productName={activeProduct.name} />
        </div>
        <h1 className={classes.header1}>{activeProduct.name}</h1>
        <div className={classes.characteristicsSection}>
          <PhotosBlock product={activeProduct} ident={productName} />
          <MainControls
            activeProduct={activeProduct}
            gadgets={gadgets}
            goodForCart={goodForCart}
            onSetActiveProduct={handleSetActiveProduct}
            productName={productName}
          />
        </div>
        <div className={classes.aboutSection}>
          <About product={activeProduct} />
          <TechSpecs product={activeProduct} />
        </div>
      </div>
      <div className={`${classes.slider__container} ${classes.mb}`}>
        <SecondarySlider title="You may also like" products={products} />
      </div>
    </>
  );
};
