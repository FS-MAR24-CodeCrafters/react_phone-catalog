import { Link } from 'react-router-dom';
import classes from './Footer.module.scss';
import logo from '../../img/LogoFooter.png';

export function Footer() {
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
        <span>Back to top</span>
        <button className={classes.button_back} aria-label="Back to top" />
      </div>
    </footer>
  );
}
