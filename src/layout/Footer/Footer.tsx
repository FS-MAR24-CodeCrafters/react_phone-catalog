import { Link } from 'react-router-dom';
import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';
import { Arrow } from '../../ui/Arrow/Arrow';
import logoWhite from '../../img/logo.svg';
import logoDark from '../../img/logo_dark.svg';
import { arrowDir } from '../../types/arrowEnum';
import classes from './Footer.module.scss';

export function Footer() {
  const { themeIsDark } = useThemeLocalStorage();
  const logo = themeIsDark ? logoDark : logoWhite;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${classes.footer}`}>
      <div>
        <Link to="/" className={classes.link}>
          <img src={logo} alt="logo" className={classes.footer__logo} />
        </Link>
      </div>

      <div className={classes.footer__info}>
        <a
          href="https://github.com/FS-MAR24-CodeCrafters/react_phone-catalog"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a href="#" className={classes.link}>
          Contacts
        </a>
        <a href="#" className={classes.link}>
          Rights
        </a>
      </div>

      <div className={classes.footer__button}>
        <span className={classes.span}>Back to top</span>
        <button onClick={scrollToTop} aria-label="Back to top">
          <Arrow dir={arrowDir.up} />
        </button>
      </div>
    </footer>
  );
}
