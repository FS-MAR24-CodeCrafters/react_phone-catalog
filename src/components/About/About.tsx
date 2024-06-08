import { useContext } from 'react';
import { PhoneStateContext } from '../../store/phoneStore/phoneContext';

import classes from './About.module.scss';

export const About = () => {
  const { phones } = useContext(PhoneStateContext);
  const { description } = phones[0];

  return (
    <div className={classes.aboutContent}>
      <div className={classes.line}>
        <h1 className={classes.about}>About</h1>
      </div>
      <div className={classes.container}>
        {description.map((item) => {
          return (
            <div>
              <h2>{item.title}</h2>
              <p>{item.text[0]}</p>
              <p>{item.text[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
