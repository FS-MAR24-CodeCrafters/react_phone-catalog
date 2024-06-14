import classes from './SkeletonPhotosBlock.module.scss';

export const SkeletonPhotosBlock = () => {
  return (
    <div className={classes.container}>
      <div className={classes.photoOfProduct}>
        <div className={`${classes.skeleton} ${classes.skeleton__photo}`} />
      </div>

      <div className={classes.smallPhotosContainer}>
        <div className={`${classes.smallPhotoContainer} ${classes.skeleton}`} />
        <div className={`${classes.smallPhotoContainer} ${classes.skeleton}`} />
        <div className={`${classes.smallPhotoContainer} ${classes.skeleton}`} />
        <div className={`${classes.smallPhotoContainer} ${classes.skeleton}`} />
        <div className={`${classes.smallPhotoContainer} ${classes.skeleton}`} />
      </div>
    </div>
  );
};
