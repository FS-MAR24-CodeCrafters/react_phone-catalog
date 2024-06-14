import React from 'react';
import heartLike from '../../img/icons/Heart.svg';
import heartLikeFilled from '../../img/icons/Heart_Like.svg';
import heartLikeDark from '../../img/icons/dark/heart.svg';
import classes from './Heart.module.scss';
import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';

type HeartProps = {
  checked: boolean;
};

export const Heart: React.FC<HeartProps> = ({ checked }) => {
  const { isThemeDark } = useThemeLocalStorage();
  const basicHeart = isThemeDark ? heartLikeDark : heartLike;

  return (
    <div className={`${classes.wrapper} ${checked && classes.selected}`}>
      <img src={checked ? heartLikeFilled : basicHeart} alt="Heart Like Icon" />
    </div>
  );
};
