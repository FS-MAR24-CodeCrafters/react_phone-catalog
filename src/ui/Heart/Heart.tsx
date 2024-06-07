import React from 'react';
import heartLike from '../../img/icons/Favourites(HeartLike).png';
import heartLikeFilled from '../../img/icons/Favourites-Filled(Heart-Like).png';
import classes from './Heart.module.scss';

type HeartProps = {
  checked: boolean;
};

export const Heart: React.FC<HeartProps> = ({ checked }) => {
  return (
    <div className={`${classes.wrapper} ${checked && classes.selected}`}>
      <img src={checked ? heartLikeFilled : heartLike} alt="Heart Like Icon" />
    </div>
  );
};
