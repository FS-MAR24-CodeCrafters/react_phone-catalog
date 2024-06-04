import React from 'react';
import './Button.scss';

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

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
