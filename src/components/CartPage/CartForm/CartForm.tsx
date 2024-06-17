import { useEffect, useState } from 'react';
import { ActionsName, FilledCartState } from '../../../types/cart/cartState';
import { UpdateProducts } from '../../../hooks/useCartLocalStorage';
import { CloseIcon } from '../../../ui/icons/CloseIcon';
import { Button } from '../../../ui/Buttons';
import { Input } from '../../../ui/Input';
import { calcScroll } from '../../../helpers/calcScroll';

import classes from './CartForm.module.scss';

type Props = {
  products: FilledCartState[];
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateProducts: UpdateProducts;
};

export const CartForm: React.FC<Props> = ({
  setFormOpen,
  products,
  updateProducts,
}) => {
  const handleClearAll = () => {
    updateProducts({ type: ActionsName.ClearAll });
    window.dispatchEvent(new Event('storage'));
  };

  const handleCancelForm = () => setFormOpen(false);

  useEffect(() => {
    const { scrollWidth } = calcScroll();

    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scrollWidth}px`;

    return () => {
      document.body.style.overflow = 'scroll';
      document.body.style.marginRight = `0px`;
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    deliveryDate: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.console.log(JSON.stringify({ ...products, formData }, null, 2));
    handleClearAll();
    setFormOpen(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrap}>
        <div className={classes.closeWrap}>
          <button
            className={classes.closeButton}
            onClick={handleCancelForm}
            aria-label="Close form"
          >
            <CloseIcon className={classes.button} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.formGroup}>
            <Input
              id="first-name"
              label="First name:"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className={classes.formGroup}>
            <Input
              id="last-name"
              label="Last Name:"
              name="lastName"
              placeholder="Enter your last name"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div className={classes.formGroup}>
            <Input
              id="time"
              label="Delivery date:"
              name="deliveryDate"
              onChange={handleChange}
              value={formData.deliveryDate}
              type="datetime-local"
            />
          </div>
          <div className={classes.formGroup}>
            <Input
              id="address"
              label="Delivery address:"
              name="address"
              placeholder="Enter your address"
              onChange={handleChange}
              value={formData.address}
            />
          </div>
          <Button label="Submit" type="submit" />
        </form>
      </div>
    </div>
  );
};
