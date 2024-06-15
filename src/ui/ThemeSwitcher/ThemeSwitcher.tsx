import classes from './ThemeSwitcher.module.scss';
import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';

const ThemeSwitcher = () => {
  const { isThemeDark, updateTheme } = useThemeLocalStorage();

  const handleThemeSwitcher = () => {
    document.body.classList.toggle('dark');
    updateTheme({ type: 'themeDark' });
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <button
      className={`${classes.theme_switcher} ${isThemeDark && classes.active}`}
      aria-label="Theme switcher"
      onClick={handleThemeSwitcher}
    />
  );
};

export default ThemeSwitcher;
