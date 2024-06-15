import { FC } from 'react';

import classes from './Input.module.scss';

type EventTypes = React.ChangeEvent<HTMLInputElement>;
type TypeType = 'text' | 'datetime-local';

type InputProps = {
  label: string;
  isLabelHide?: boolean;
  id: string;
  placeholder?: string;
  name: string;
  onChange: (event: EventTypes) => void;
  value?: string;
  type?: TypeType;
  required?: boolean;
};

export const Input: FC<InputProps> = ({
  label,
  id,
  onChange,
  placeholder,
  name,
  value,
  isLabelHide = false,
  type = 'text',
  required = true,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className={classes.label}
        {...(isLabelHide && {
          style: { opacity: '0', position: 'absolute', pointerEvents: 'none' },
        })}
      >
        {label}
      </label>
      <input
        className={classes.input}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
};
