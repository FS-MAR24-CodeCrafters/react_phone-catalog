import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { sliders } from '../../../constants/sliders';
import { ArrowLeft } from '../../../ui/Arrow/arrows/ArrowLeft';
import { ArrowRight } from '../../../ui/Arrow/arrows/ArrowRight';
import classes from './MainSlider.module.scss';
import { useResize } from '../../../hooks/useResize';
import { useThemeLocalStorage } from '../../../hooks/useThemeLocalStorage';

export const MainSlider = () => {
  const [counter, setCounter] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [screenWidth] = useResize();
  const { themeIsDark } = useThemeLocalStorage();

  const handleChangeSlide = (index: number) => {
    setCounter(index);
  };

  const handlePrevSlide = () => {
    if (counter === 0) {
      setCounter(sliders.length - 1);

      return;
    }

    setCounter((prevState) => prevState - 1);
  };

  const handleNextSlide = () => {
    if (counter === sliders.length - 1) {
      setCounter(0);

      return;
    }

    setCounter((prevState) => prevState + 1);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLLIElement>) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLLIElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const difference = touchDown - currentTouch;

    if (difference > 5) {
      handleNextSlide();
    }

    if (difference < -5) {
      handlePrevSlide();
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      handleNextSlide();
    }, 5000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <section className={classes.slider}>
      <div className={classes.slider__wrapper}>
        <button
          className={classes.slider__arrow_wrap}
          aria-label="Prev slide"
          onClick={handlePrevSlide}
        >
          <ArrowLeft
            width={9}
            height={5}
            fill={`${themeIsDark ? '#F1F2F9' : '#313237'}`}
          />
        </button>
        <div className={classes.slider__main}>
          <ul className={classes.slider__list}>
            {sliders.map((slide, index) => (
              <li
                className={classes.slider__item}
                key={slide.id}
                style={{ opacity: `${counter === index ? 1 : 0}` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
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
        <button
          className={classes.slider__arrow_wrap}
          aria-label="Next slide"
          onClick={handleNextSlide}
        >
          <ArrowRight
            width={9}
            height={5}
            fill={`${themeIsDark ? '#F1F2F9' : '#313237'}`}
          />
        </button>
      </div>
      <div className={classes.dots}>
        <ul className={classes.dots__list}>
          {sliders.map((slider, index) => (
            <li className={classes.dots__item} key={slider.id}>
              <button
                className={classes.dots__wrapper}
                aria-label={`Change slide to ${index + 1}`}
                onClick={() => handleChangeSlide(index)}
              >
                <div
                  className={`${classes.dots__dot} ${index === counter && classes.dots__active}`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
