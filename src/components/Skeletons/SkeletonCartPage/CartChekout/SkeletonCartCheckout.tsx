/* eslint-disable no-param-reassign */
import classes from './SkeletonCartCheckout.module.scss';

export const SkeletonCartCheckout = () => {
  return (
    <div className={classes.cartCheckout}>
      <div className={classes.cartPrice}>
        <div className={`${classes.skeleton__price} ${classes.skeleton}`} />
        <div
          className={`${classes.skeleton__totalItems} ${classes.skeleton}`}
        />
      </div>
      <div className={classes.breakLine} />
      <div className={`${classes.checkoutButton} ${classes.skeleton}`} />
    </div>
  );
};
