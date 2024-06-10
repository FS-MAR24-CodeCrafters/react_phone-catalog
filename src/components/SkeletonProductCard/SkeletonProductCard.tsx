import cn from 'classnames';
import classes from './SkeletonProductCard.module.scss';

export const SkeletonProductCard = () => {
  return (
    <article className={classes.product__card}>
      <div
        className={`${classes.product__img_container} ${classes.skeleton}`}
      />

      <div className={classes.product__title}>
        <div
          className={`${classes.skeleton__text_title} ${classes.skeleton}`}
        />
        <div
          className={`${classes.skeleton__text_title} ${classes.skeleton}`}
        />
      </div>

      <div className={classes.product__price}>
        <div className={`${classes.skeleton__num_price} ${classes.skeleton}`} />
        <div className={`${classes.skeleton__num_price} ${classes.skeleton}`} />
      </div>

      <div className={classes.breackLine} />

      <div className={cn(classes.product__info, classes.paddingTop)}>
        <div
          className={`${classes.skeleton__description} ${classes.skeleton}`}
        />
        <div
          className={`${classes.skeleton__description} ${classes.skeleton}`}
        />
      </div>

      <div className={classes.product__info}>
        <div
          className={`${classes.skeleton__description} ${classes.skeleton}`}
        />
        <div
          className={`${classes.skeleton__description} ${classes.skeleton}`}
        />
      </div>

      <div className={cn(classes.product__info, classes.paddingBotton)}>
        <div
          className={`${classes.skeleton__description} ${classes.skeleton}`}
        />
        <div
          className={`${classes.skeleton__description} ${classes.skeleton}`}
        />
      </div>

      <div className={classes.actionBlock}>
        <div className={`${classes.skeleton__button} ${classes.skeleton}`} />

        <div className={`${classes.skeleton__heart} ${classes.skeleton}`} />
      </div>
    </article>
  );
};
