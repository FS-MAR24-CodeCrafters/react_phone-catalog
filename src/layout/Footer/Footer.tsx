import { Link } from 'react-router-dom';
import { Arrow } from '../../ui/Arrow/Arrow';
import { arrowDir } from '../../types/arrowEnum';
import { LogoIcon } from '../../ui/icons/LogoIcon';
import classes from './Footer.module.scss';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${classes.footer}`}>
      <div>
        <Link to="/" className={classes.link}>
          <LogoIcon className={classes.footer__logo} />
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
        <Link to="/contacts" className={classes.link}>
          Contacts
        </Link>
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
