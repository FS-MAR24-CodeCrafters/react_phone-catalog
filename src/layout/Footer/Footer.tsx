import { Link } from 'react-router-dom';
import classes from './Footer.module.scss';
import logo from '../../img/LogoFooter.png';
import { Arrow } from '../../ui/Arrow/Arrow';
import { arrowDir } from '../../types/arrowEnum';

export function Footer() {
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
        <a href="#">Github</a>
        <a href="#">Contacts</a>
        <a href="#">Rights</a>
      </div>

      <div className={classes.footer__button}>
        <span className={classes.span}>Back to top</span>
        <button onClick={scrollToTop} aria-label="Back to top">
          <Arrow dir={arrowDir.up} />
        </button>
        {/* <button className={classes.button_back} aria-label="Back to top" /> */}
      </div>
    </footer>
  );
}
