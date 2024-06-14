import { useEffect } from 'react';
import classes from './ThemeSwitcher.module.scss';
import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';

const ThemeSwitcher = () => {
  const { themeIsDark, updateTheme } = useThemeLocalStorage();

  useEffect(() => {
    if (themeIsDark) {
      document.body.classList.add('dark');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const handleThemeSwitcher = () => {
    document.body.classList.toggle('dark');
    updateTheme({ type: 'themeDark' });
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <button
      className={`${classes.theme_switcher} ${themeIsDark && classes.active}`}
      aria-label="Theme switcher"
      onClick={handleThemeSwitcher}
    />
  );
};

export default ThemeSwitcher;
