import classes from './SkeletonCartList.module.scss';

export const SkeletonCartList = () => {
  return (
    <div className={classes.cartList}>
      <article className={`${classes.cartItem}`}>
        <div className={classes.itemContentWrap}>
          <div className={`${classes.closeButton} ${classes.skeleton}`} />

          <div className={`${classes.itemPhotoWrap}`}>
            <div className={`${classes.skeleton} ${classes.skeleton__photo}`} />
          </div>

          <div className={`${classes.itemTitle} ${classes.skeleton}`} />
        </div>

        <div className={classes.itemCounterWrap}>
          <div className={classes.itemCounter}>
            <div className={`${classes.minusButton}  ${classes.skeleton}`} />

            <div className={classes.quantityWrap}>
              <div
                className={`${classes.skeleton} ${classes.skeleton__quantity}`}
              />
            </div>

            <div className={`${classes.plusButton} ${classes.skeleton}`} />
          </div>

          <div className={`${classes.itemPriceWrap} ${classes.skeleton}`} />
        </div>
      </article>

      <article className={`${classes.cartItem}`}>
        <div className={classes.itemContentWrap}>
          <div className={`${classes.closeButton} ${classes.skeleton}`} />

          <div className={`${classes.itemPhotoWrap}`}>
            <div className={`${classes.skeleton} ${classes.skeleton__photo}`} />
          </div>

          <div className={`${classes.itemTitle} ${classes.skeleton}`} />
        </div>

        <div className={classes.itemCounterWrap}>
          <div className={classes.itemCounter}>
            <div className={`${classes.minusButton}  ${classes.skeleton}`} />

            <div className={classes.quantityWrap}>
              <div
                className={`${classes.skeleton} ${classes.skeleton__quantity}`}
              />
            </div>

            <div className={`${classes.plusButton} ${classes.skeleton}`} />
          </div>

          <div className={`${classes.itemPriceWrap} ${classes.skeleton}`} />
        </div>
      </article>
    </div>
  );
};
