import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';
import closeLight from '../../img/icons/close.svg';
import closeDark from '../../img/icons/dark/Close.svg';

export const CloseIcon = ({ ...props }) => {
  const { isThemeDark } = useThemeLocalStorage();

  const close = isThemeDark ? closeDark : closeLight;

  return <img src={close} {...props} alt="back of close" />;
};
