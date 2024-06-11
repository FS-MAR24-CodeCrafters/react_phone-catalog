import { ArrowLeft } from '../../../ui/Arrow/arrows/ArrowLeft';
import { ArrowRight } from '../../../ui/Arrow/arrows/ArrowRight';
import classes from './MainSlider.module.scss';

export const MainSlider = () => {
  return (
    <section className={classes.slider}>
      <div className={classes.slider__wrapper}>
        <div className={classes.slider__arrow_wrap}>
          <ArrowLeft width={5} height={9} fill="#313237" />
        </div>
        <div className={classes.slider__main}>
          <ul className={classes.slider__list}>
            <li className={classes.slider__item}>
              <img src="" alt="slider img" />
            </li>
          </ul>
        </div>
        <div className={classes.slider__arrow_wrap}>
          <ArrowRight width={5} height={9} fill="#313237" />
        </div>
      </div>
      <div className={classes.dots}>
        <ul className={classes.dots__list}>
          <li className={classes.dots__item}>.</li>
        </ul>
      </div>
    </section>
  );
};
