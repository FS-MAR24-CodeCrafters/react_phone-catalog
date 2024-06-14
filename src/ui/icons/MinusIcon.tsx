import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';
import minusIcon from '../../img/icons/Minus.svg';
import minusIconDark from '../../img/icons/dark/Minus.svg';

export const MinusIcon = ({ ...props }) => {
  const { isThemeDark } = useThemeLocalStorage();

  const minus = isThemeDark ? minusIconDark : minusIcon;

  return <img src={minus} alt="minus button" {...props} />;
};
