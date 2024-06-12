import { useContext, useEffect } from 'react';
import classes from './CartForm.module.scss';
import close from '../../../img/icons/Close.png';
import { CartDispatchContext } from '../../../store/cartStore/cartContext';
import { ActionsName } from '../../../types/cart/cartState';

type Props = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartForm: React.FC<Props> = ({ setFormOpen }) => {
  const dispatch = useContext(CartDispatchContext);

  const handleClearAll = () => dispatch({ type: ActionsName.ClearAll });

  const handleCancelForm = () => setFormOpen(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.formWrap}>
        <div className={classes.closeWrap}>
          <button className={classes.closeButton} onClick={handleCancelForm}>
            <img src={close} alt="close button" className={classes.button} />
          </button>
        </div>
        <form>
          <div className={classes.formGroup}>
            <label htmlFor="first-name" className={classes.formLabel}>
              First name:
            </label>
            <input
              className={classes.formInput}
              type="text"
              id="first-name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="last-name" className={classes.formLabel}>
              Last Name:
            </label>
            <input
              className={classes.formInput}
              type="text"
              id="last-name"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="time" className={classes.formLabel}>
              Delivery date:
            </label>
            <input
              className={classes.formInput}
              type="datetime-local"
              id="time"
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="address" className={classes.formLabel}>
              Delivery adress:
            </label>
            <input
              className={classes.formInput}
              type="text"
              id="address"
              placeholder="Enter your adress"
              required
            />
          </div>
          <button
            type="submit"
            className={classes.submitButton}
            onClick={handleClearAll}
          >
            <p className={classes.submit}>Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
};
