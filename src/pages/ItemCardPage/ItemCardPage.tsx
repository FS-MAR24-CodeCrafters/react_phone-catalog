import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { getGoods } from '../../api/goods';
import { useProductReqHandler } from '../../hooks/useProductReqHandler';
import { PhotosBlock } from '../../components/ItemCardPage/PhotosBlock/PhotosBlock';
import { MainControls } from '../../components/ItemCardPage/MainControls/MainControls';
import { About } from '../../components/ItemCardPage/About';
import { TechSpecs } from '../../components/ItemCardPage/TechSpecs/TechSpecs';
import { ProductNotFound } from '../../components/ItemCardPage/ProductNotFound';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { SecondarySlider } from '../../components/Sliders/SecondarySlider';
import { Skeleton } from '../../components/Skeletons/SkeletonItemCardPage/SkeletonItemCardPage';
import { ErrorMessage } from '../../components/ErrorMessage';
import { ErrorScreen } from '../../components/ErrorScreen';

import type { Product } from '../../types/product';
import type { Gadget } from '../../types/gadget';
import classes from './ItemCard.module.scss';

export const ItemCardPage = () => {
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [activeProduct, setActiveProduct] = useState<Gadget | null>(null);
  const [gadgetError, setGadgetError] = useState(false);
  const [gadgetModal, setGadgetModal] = useState(false);

  const {
    loading, products, openModal, error, setError, setOpenModal,
  } = useProductReqHandler();

  const { pathname } = useLocation();

  const locationArr = pathname.split('/');
  const category = locationArr[1];
  const productName = locationArr[2];

  useEffect(() => {
    window.scrollTo(0, 0);

    getGoods<Gadget[]>(`${category}.json`)
      .then((res) => {
        setGadgets(res);

        const initialProduct = res.find((elem) => elem.id === productName);

        if (initialProduct) {
          setActiveProduct(initialProduct);
        } else {
          setActiveProduct(null);
        }
      })
      .catch(() => {
        setGadgetModal(true);
        setGadgetError(true);
      });
  }, [category, productName, pathname, setError, setOpenModal]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (gadgetModal) {
      timer = setTimeout(() => {
        setGadgetModal(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [gadgetModal]);

  const handleSetActiveProduct = (newProduct: Gadget) => {
    setActiveProduct(newProduct);
  };

  if (gadgetError) {
    return (
      <div style={{ gridColumn: '1 / -1' }}>
        <ErrorScreen setError={setGadgetError} />
      </div>
    );
  }

  if (loading) {
    return <Skeleton />;
  }

  const shuffleArray = (array: Product[]) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  if (!activeProduct) {
    return (
      <>
        <h1 className={classes.header1}>There is no such Product</h1>
        <ProductNotFound />
      </>
    );
  }

  const goodForCart = products.find((item) => item.itemId === productName) || null;
  const randomProducts = shuffleArray(products).slice(0, 10);

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
          />
        </div>
        <div className={classes.aboutSection}>
          <About product={activeProduct} />

          <TechSpecs product={activeProduct} />
        </div>
      </div>
      <div className={`${classes.slider__container} ${classes.mb}`}>
        <SecondarySlider
          title="You may also like"
          products={randomProducts}
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
