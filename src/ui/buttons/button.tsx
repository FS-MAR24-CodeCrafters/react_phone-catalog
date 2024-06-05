import React from 'react';
import classes from './Button.module.scss';

type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
};

export const Button: React.FC<Props> = ({
  label,
  onClick,
  disabled,
  selected,
}) => {
  const buttonClasses = `button ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`;

  window.console.log(buttonClasses);

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
