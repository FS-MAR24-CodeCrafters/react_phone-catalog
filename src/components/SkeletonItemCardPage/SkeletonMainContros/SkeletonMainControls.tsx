import classes from './SkeletonMainControls.module.scss';

export const SkeletonMainControls = () => {
  return (
    <div>
      <div className={classes.colorsSection}>
        <div className={`${classes.skeleton} ${classes.text}`} />
        <div className={classes.colorsContainer}>
          <div className={`${classes.skeleton} ${classes.circleColor}`} />
          <div className={`${classes.skeleton} ${classes.circleColor}`} />
          <div className={`${classes.skeleton} ${classes.circleColor}`} />
        </div>
      </div>

      <div className={`${classes.skeleton} ${classes.text}`} />
      <div className={classes.capasitySection}>
        <div className={`${classes.skeleton} ${classes.capasityButton}`} />
        <div className={`${classes.skeleton} ${classes.capasityButton}`} />
        <div className={`${classes.skeleton} ${classes.capasityButton}`} />
      </div>

      <div className={classes.product__price}>
        <div className={`${classes.skeleton} ${classes.textPrice}`} />
      </div>

      <div className={classes.actionBlock}>
        <div className={classes.buttonContainer}>
          <div className={`${classes.skeleton} ${classes.addToCartButton}`} />
          <div className={`${classes.skeleton} ${classes.heartButton}`} />
        </div>
      </div>
      <div>
        <div className={classes.characteristicsContainer}>
          <div className={`${classes.skeleton} ${classes.textOptions}`} />
          <div className={`${classes.skeleton} ${classes.textOptions}`} />
        </div>
        <div className={classes.characteristicsContainer}>
          <div className={`${classes.skeleton} ${classes.textOptions}`} />
          <div className={`${classes.skeleton} ${classes.textOptions}`} />
        </div>
        <div className={classes.characteristicsContainer}>
          <div className={`${classes.skeleton} ${classes.textOptions}`} />
          <div className={`${classes.skeleton} ${classes.textOptions}`} />
        </div>
        <div className={classes.characteristicsContainer}>
          <div className={`${classes.skeleton} ${classes.textOptions}`} />
          <div className={`${classes.skeleton} ${classes.textOptions}`} />
        </div>
      </div>
    </div>
  );
};
