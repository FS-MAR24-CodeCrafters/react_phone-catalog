import React from 'react';
import classes from './Button.module.scss';

type Props = {
  label: string;
  onClick?: () => void;
  addedToCart?: boolean;
};

export const ButtonTemplate: React.FC<Props> = ({
  label,
  onClick,
  addedToCart,
}) => {
  return (
    <button
      className={`
        ${classes.button} 
        ${classes.button_default} 
        ${addedToCart && classes.active}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
