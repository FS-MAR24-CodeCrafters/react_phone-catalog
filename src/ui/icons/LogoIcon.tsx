import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';
import logoWhite from '../../img/logo.svg';
import logoDark from '../../img/logo_dark.svg';

export const LogoIcon = ({ ...props }) => {
  const { isThemeDark } = useThemeLocalStorage();

  const logo = isThemeDark ? logoDark : logoWhite;

  return <img src={logo} alt="Company logo" {...props} />;
};
