import { Link } from 'react-router-dom';
import { useState } from 'react';
import { sliders } from '../../../constants/sliders';
import { ArrowLeft } from '../../../ui/Arrow/arrows/ArrowLeft';
import { ArrowRight } from '../../../ui/Arrow/arrows/ArrowRight';
import classes from './MainSlider.module.scss';
import { useResize } from '../../../hooks/useResize';

export const MainSlider = () => {
  const [visibleSlide] = useState(sliders[0]);
  const [screenWidth] = useResize();

  return (
    <section className={classes.slider}>
      <div className={classes.slider__wrapper}>
        <div className={classes.slider__arrow_wrap}>
          <ArrowLeft width={9} height={5} fill="#313237" />
        </div>
        <div className={classes.slider__main}>
          <ul className={classes.slider__list}>
            {sliders.map((slide) => (
              <li
                className={classes.slider__item}
                key={slide.id}
                style={{ opacity: `${visibleSlide.id === slide.id ? 1 : 0}` }}
              >
                <Link to={slide.link} className={classes.slider__link}>
                  <img
                    src={
                      screenWidth < 640 ? slide.src.mobile : slide.src.tablet
                    }
                    className={classes.slider__img}
                    alt={slide.alt}
                    style={{ backgroundColor: `${slide.background}` }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.slider__arrow_wrap}>
          <ArrowRight width={9} height={5} fill="#313237" />
        </div>
      </div>
      <div className={classes.dots}>
        <ul className={classes.dots__list}>
          {sliders.map((slider, index) => (
            <li className={classes.dots__item}>
              <button
                className={classes.dots__wrapper}
                aria-label={`Change slide to ${index + 1}`}
              >
                <div className={classes.dots__dot} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
