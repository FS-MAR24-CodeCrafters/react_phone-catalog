import { FC } from 'react';
import classes from './ErrorScreen.module.scss';
import error from '../../img/product-not-found.png';

type ErrorScreenProps = {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ErrorScreen: FC<ErrorScreenProps> = ({ setError }) => {
  return (
    <section className={classes.error}>
      <div className={classes.container}>
        <div className={classes.img__wrapper}>
          <img src={error} alt="Page not found" className={classes.img} />
        </div>
        <p className={classes.title}>Something went wrong message </p>
        <button onClick={() => setError(false)}> Reload</button>
      </div>
    </section>
  );
};
