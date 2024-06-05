import React from 'react';
import heartLike from '../../../public/img/icons/Favourites(HeartLike).png';
import heartLikeFilled from '../../../public/img/icons/Favourites-Filled(Heart-Like).png';
import classes from './Heart.module.scss';

type HeartProps = {
  checked: boolean;
};

export const Heart: React.FC<HeartProps> = ({ checked }) => {
  return (
    <button className={`${classes.wrapper} ${checked && classes.selected}`}>
      <img src={checked ? heartLikeFilled : heartLike} alt="Heart Like Icon" />
    </button>
  );
};
