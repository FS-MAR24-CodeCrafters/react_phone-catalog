import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';
import shoppingBag from '../../img/icons/Cart.svg';
import shoppingBagDark from '../../img/icons/dark/Cart.svg';

export const CartIcon = ({ ...props }) => {
  const { isThemeDark } = useThemeLocalStorage();

  const cart = isThemeDark ? shoppingBagDark : shoppingBag;

  return <img src={cart} alt="Heart like" {...props} />;
};
