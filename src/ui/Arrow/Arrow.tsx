import { FC } from 'react';
import { arrowDir } from '../../types/arrowEnum';
import left from '../../../public/img/icons/arrowLeft.svg';
import right from '../../../public/img/icons/arrowRight.svg';
import up from '../../../public/img/icons/arrowUp.svg';
import down from '../../../public/img/icons/arrowDown.svg';
import classes from './Arrow.module.scss';

type ArrowProps = {
  dir: arrowDir;
};

export const Arrow: FC<ArrowProps> = ({ dir }) => {
  let imageLink;

  if (dir === arrowDir.down) {
    imageLink = down;
  }

  if (dir === arrowDir.top) {
    imageLink = up;
  }

  if (dir === arrowDir.right) {
    imageLink = right;
  }

  if (dir === arrowDir.left) {
    imageLink = left;
  }

  return (
    <button className={classes.button}>
      <img src={imageLink} alt={dir} className={classes.button__img} />
    </button>
  );
};
