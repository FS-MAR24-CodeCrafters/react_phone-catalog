import { FC } from 'react';
import classes from './ErrorMessage.module.scss';
import { CloseIcon } from '../../ui/icons/CloseIcon';

type ErrorMessageProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ setOpenModal }) => {
  return (
    <article className={classes.error}>
      <p className={classes.title}>Message:</p>
      <p className={classes.message}>Request failed. Please try again later.</p>
      <div className={classes.line} />
      <button
        className={classes.btn}
        aria-label="Close Button"
        onClick={() => setOpenModal(false)}
      >
        <CloseIcon className={classes.img} />
      </button>
    </article>
  );
};
