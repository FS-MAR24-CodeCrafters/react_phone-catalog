import { FC } from 'react';
import classes from './ErrorMessage.module.scss';
import close from '../../img/icons/close.svg';

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
        <img className={classes.img} src={close} alt="Close button" />
      </button>
    </article>
  );
};
