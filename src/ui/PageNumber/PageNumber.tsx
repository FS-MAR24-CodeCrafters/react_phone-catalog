import { FC } from 'react';

import classes from './PageNumber.module.scss';

type Props = {
  pageNum: number;
  selected: boolean;
  handleClick: (page: number) => void;
};

export const PageNumber: FC<Props> = ({ pageNum, selected, handleClick }) => {
  return (
    <button
      onClick={() => handleClick(pageNum)}
      className={`${classes.button} ${selected && classes.button__selected}`}
    >
      {pageNum}
    </button>
  );
};
