import { useContext } from 'react';
import { PhoneStateContext } from '../../store/phoneStore/phoneContext';
import { CartItem } from '../CartItem';

export const Cart = () => {
  const { phones } = useContext(PhoneStateContext);
  const [phone1, phone2, phone3] = phones;

  return (
    <div>
      <CartItem phone={phone1} />
      <CartItem phone={phone2} />
      <CartItem phone={phone3} />
    </div>
  );
};
