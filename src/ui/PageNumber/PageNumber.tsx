import { FC } from 'react';

import classes from './PageNumber.module.scss';

type Props = {
  pageNum: number;
};

export const PageNumber: FC<Props> = ({ pageNum }) => {
  return (
    /* for selected button use classes.button__selected */
    <button className={`${classes.button}`}>{pageNum}</button>
  );
};
