import React from 'react';
import classes from './Button.module.scss';

type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({ label, onClick, disabled }) => {
  return (
    <button
      className={`${classes.button} ${classes.button_default}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
