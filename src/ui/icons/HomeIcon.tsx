import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';
import home from '../../img/icons/Home.svg';
import homeDark from '../../img/icons/dark/Home.svg';

export const HomeIcon = ({ ...props }) => {
  const { isThemeDark } = useThemeLocalStorage();

  const homeIcon = isThemeDark ? homeDark : home;

  return <img src={homeIcon} alt="Return to the main Page" {...props} />;
};
