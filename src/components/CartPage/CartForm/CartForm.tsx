import { useEffect, useState } from 'react';
import classes from './CartForm.module.scss';
import close from '../../../img/icons/Close.png';
import { ActionsName } from '../../../types/cart/cartState';
import { useCartLocalStorage } from '../../../hooks/useCartLocalStorage';

type Props = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartForm: React.FC<Props> = ({ setFormOpen }) => {
  const { updateProducts } = useCartLocalStorage();
  const { products } = useCartLocalStorage();
  const handleClearAll = () => {
    updateProducts({ type: ActionsName.ClearAll });
    window.dispatchEvent(new Event('storage'));
  };

  const handleCancelForm = () => setFormOpen(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    deliveryDate: '',
    address: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.console.log(JSON.stringify({ ...products, formData }, null, 2));
    handleClearAll();
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrap}>
        <div className={classes.closeWrap}>
          <button className={classes.closeButton} onClick={handleCancelForm}>
            <img src={close} alt="close button" className={classes.button} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="first-name" className={classes.formLabel}>
              First name:
            </label>
            <input
              className={classes.formInput}
              type="text"
              id="first-name"
              name='name'
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
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
              name='lastName'
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
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
              name='deliveryDate'
              value={formData.deliveryDate}
              onChange={handleChange}
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
              name='address'
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className={classes.submitButton}
          >
            <p className={classes.submit}>Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
};
