import { Link } from 'react-router-dom';
import classes from './NotFound.module.scss';
import notFound from '../../img/page-not-found.png';

export const NotFound = () => {
  return (
    <section className={classes.page404}>
      <div className={classes.container}>
        <div className={classes.img__wrapper}>
          <img
            src={notFound}
            alt="Page not found"
            className={classes.img}
          />
        </div>
        <p className={classes.title}>The page is missing</p>
        <Link to="/"> Back to the main page</Link>
      </div>
    </section>
  );
};
