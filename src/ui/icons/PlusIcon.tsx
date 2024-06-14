import plusIcon from '../../img/icons/Plus.svg';
import plusIconDark from '../../img/icons/dark/Plus.svg';
import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';

export const PlusIcon = ({ ...props }) => {
  const { isThemeDark } = useThemeLocalStorage();

  const plus = isThemeDark ? plusIconDark : plusIcon;

  return <img src={plus} alt="plus button" {...props} />;
};
