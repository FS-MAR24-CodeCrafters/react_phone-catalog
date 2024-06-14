import classes from './SkeletonItemCard.module.scss';

import { SkeletonPhotosBlock } from './SkeletonPhotoBlock/SkeletonPhotosBlock';
import BreadCrumbs from '../../BreadCrumbs/BreadCrumbs';
import { SkeletonMainControls } from './SkeletonMainContros/SkeletonMainControls';
import { SkeletonAbout } from './SkeletonAbout/SkeletonAbout';
import { SkeletonTechSpecs } from './SkeletonTechSpecs/SkeletonTechSpecs';
import { SecondarySlider } from '../../Sliders/SecondarySlider';

export const Skeleton = () => {
  return (
    <>
      <div className={classes.textSection}>
        <div className={classes.breadCrumbsContainer}>
          <BreadCrumbs />
        </div>
        <div className={`${classes.header1} ${classes.skeleton}`} />
        <div className={classes.characteristicsSection}>
          <SkeletonPhotosBlock />
          <SkeletonMainControls />
        </div>
        <div className={classes.aboutSection}>
          <SkeletonAbout />
          <SkeletonTechSpecs />
        </div>
      </div>
      <div className={`${classes.slider__container} ${classes.mb}`}>
        <SecondarySlider title="You may also like" products={[]} />
      </div>
    </>
  );
};
