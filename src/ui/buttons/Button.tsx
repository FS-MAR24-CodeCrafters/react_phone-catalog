import React from 'react';
import classes from './Button.module.scss';

type Props = {
  label: string;
  onClick?: () => void;
  addedToCart?: boolean;
  type?: 'submit';
};

export const Button: React.FC<Props> = ({
  label,
  onClick,
  addedToCart,
  type,
}) => {
  return (
    <button
      className={`
        ${classes.button} 
        ${classes.button_default} 
        ${addedToCart && classes.active}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};
