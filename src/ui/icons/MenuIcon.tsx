import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';
import menuLight from '../../img/icons/Menu.svg';
import menuDark from '../../img/icons/dark/Menu.svg';

export const MenuIcon = ({ ...props }) => {
  const { isThemeDark } = useThemeLocalStorage();

  const menu = isThemeDark ? menuDark : menuLight;

  return <img src={menu} alt="menu" {...props} />;
};
