import classes from './SkeletonAbout.module.scss';

export const SkeletonAbout = () => {
  return (
    <div className={classes.aboutContent}>
      <div className={classes.line}>
        <div className={`${classes.skeleton} ${classes.aboutSection} ${classes.textTopic}`} />
      </div>
      <div className={classes.container}>
        <div className={classes.aboutSection}>
          <div className={`${classes.skeleton} ${classes.textTopic}`} />
          <div className={`${classes.skeleton} ${classes.aboutText}`} />
        </div>
        <div className={classes.aboutSection}>
          <div className={`${classes.skeleton} ${classes.textTopic}`} />
          <div className={`${classes.skeleton} ${classes.aboutText}`} />
        </div>
        <div className={classes.aboutSection}>
          <div className={`${classes.skeleton} ${classes.textTopic}`} />
          <div className={`${classes.skeleton} ${classes.aboutText}`} />
        </div>
      </div>
    </div>
  );
};
