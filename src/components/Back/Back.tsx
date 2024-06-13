import { Link } from 'react-router-dom';
import { ArrowLeft } from '../../ui/Arrow/arrows/ArrowLeft';

import classes from './Back.module.scss';

export const Back = () => {
  return (
    <Link className={classes.back} to="..">
      <ArrowLeft width={9} height={5} fill="#313237" />
      <p className={classes.back__link}>Back</p>
    </Link>
  );
};
