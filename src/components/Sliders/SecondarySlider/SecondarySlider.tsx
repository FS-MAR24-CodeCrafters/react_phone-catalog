import { useEffect, useRef, useState } from 'react';
import { ProductCard } from '../../ProductCard';
import { Arrow } from '../../../ui/Arrow/Arrow';
import { arrowDir } from '../../../types/arrowEnum';
import { Product } from '../../../types/product';

import classes from './SecondarySlider.module.scss';
import { SkeletonProductCard } from '../../SkeletonProductCard';

type SecondarySliderProps = {
  title: string;
  products: Product[];
};

const SLIDES_ON_PAGE = 4;

export const SecondarySlider: React.FC<SecondarySliderProps> = ({
  title,
  products = [],
}) => {
  const cardRef = useRef<HTMLLIElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState(0);
  const [slidesLeft, setSlidesLeft] = useState(0);
  const [transformWidth, setTransformWidth] = useState(0);

  useEffect(() => {
    const isCardRefExist = cardRef && cardRef.current;
    const isListRefExist = listRef && listRef.current;
    const isContainerRefExist = containerRef && containerRef.current;

    if (isCardRefExist && isListRefExist && isContainerRefExist) {
      const computedStyle = window
        .getComputedStyle(containerRef.current)
        .paddingLeft.slice(0, -2);

      const padding_left = Number(computedStyle);
      const cards_qty = products.length;
      const total_width = listRef.current.clientWidth;
      const card_width = cardRef.current.clientWidth;
      const gapWidth = (total_width - card_width * cards_qty) / (cards_qty - 1);
      const slide_width = card_width + gapWidth;
      const slides_on_page = Math.trunc(
        (window.innerWidth - padding_left) / slide_width,
      );
      const is_slider_full = cards_qty - slides_on_page < 0;
      let slidesLeftQty;

      if (slides_on_page <= SLIDES_ON_PAGE) {
        slidesLeftQty = is_slider_full ? 0 : cards_qty - slides_on_page;
      } else {
        slidesLeftQty = cards_qty - SLIDES_ON_PAGE;
      }

      setTransformWidth(gapWidth + card_width);

      setSlidesLeft(slidesLeftQty);
    }
  }, [products]);

  if (!products.length) {
    const arrayOfSkeletons = new Array(4).fill(<SkeletonProductCard />);

    return (
      <section className={classes.slider}>
        <div className={classes.slider__header}>
          <h2 className={classes.slider__title}>{title}</h2>
          <div className={classes.slider__buttons}>
            <button disabled>
              {/* Prev Slide */}
              <Arrow dir={arrowDir.left} disabled />
            </button>
            <button disabled>
              {/* Next Slide */}
              <Arrow dir={arrowDir.right} disabled />
            </button>
          </div>
        </div>
        <div className={classes.slider__wrapper}>
          <ul className={classes.slider__list}>
            {arrayOfSkeletons.map((product, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li className={classes.slider__item} key={index}>
                {product}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  const handleNextSlide = () => {
    setTransform((prevState) => prevState - transformWidth);
    setSlidesLeft((prevState) => prevState - 1);
  };

  const handlePrevSlide = () => {
    setTransform((prevState) => prevState + transformWidth);
    setSlidesLeft((prevState) => prevState + 1);
  };

  const leftArrowDisable = transform === 0;

  return (
    <section className={classes.slider} ref={containerRef}>
      <div className={classes.slider__header}>
        <h2 className={classes.slider__title}>{title}</h2>
        <div className={classes.slider__buttons}>
          <button
            {...(leftArrowDisable && { disabled: true })}
            onClick={handlePrevSlide}
            onKeyDown={(e) => {
              if (e.key === 'enter') {
                handlePrevSlide();
              }
            }}
          >
            {/* Prev Slide */}
            <Arrow dir={arrowDir.left} disabled={leftArrowDisable} />
          </button>
          <button
            onClick={handleNextSlide}
            onKeyDown={(e) => {
              if (e.key === 'enter') {
                handleNextSlide();
              }
            }}
            {...(slidesLeft === 0 && { disabled: true })}
          >
            {/* Next Slide */}
            <Arrow dir={arrowDir.right} disabled={slidesLeft === 0} />
          </button>
        </div>
      </div>
      <div className={classes.slider__wrapper}>
        <ul
          className={classes.slider__list}
          ref={listRef}
          style={{ transform: `translateX(${transform}px)` }}
        >
          {products.map((product) => (
            <li className={classes.slider__item} ref={cardRef} key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
