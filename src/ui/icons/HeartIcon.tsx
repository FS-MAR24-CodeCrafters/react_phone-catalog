import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';
import heartLike from '../../img/icons/Heart.svg';
import heartLikeDark from '../../img/icons/dark/heart.svg';

export const HeartIcon = ({ ...props }) => {
  const { isThemeDark } = useThemeLocalStorage();

  const heart = isThemeDark ? heartLikeDark : heartLike;

  return <img src={heart} alt="Heart like" {...props} />;
};
