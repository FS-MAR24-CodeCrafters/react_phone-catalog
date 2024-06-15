import { FC } from 'react';

import classes from './Input.module.scss';

type EventTypes = React.ChangeEvent<HTMLInputElement>;
type TypeType = 'text' | 'datetime-local';

type InputProps = {
  label: string;
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
  type = 'text',
  required = true,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className={classes.label}>
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
        {...props}
      />
    </>
  );
};
