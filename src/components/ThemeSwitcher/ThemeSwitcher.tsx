import { useState } from 'react';
import classes from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [dark, setDark] = useState(false);
  const handleThemeSwitcher = () => {
    document.body.classList.toggle('dark');
    setDark((prevState) => !prevState);
  };

  return (
    <button
      className={`${classes.theme_switcher} ${dark && classes.active}`}
      aria-label="Theme switcher"
      onClick={handleThemeSwitcher}
    />
  );
};

export default ThemeSwitcher;
