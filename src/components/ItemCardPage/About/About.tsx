import type { Gadget } from '../../../types/gadget';
import classes from './About.module.scss';

type Props = {
  product: Gadget;
};

export const About: React.FC<Props> = ({ product }) => {
  return (
    <div className={classes.aboutContent}>
      <div className={classes.line}>
        <h2 className={classes.about}>About</h2>
      </div>
      <div className={classes.container}>
        {product.description.map((item) => {
          return (
            <div className={classes.aboutSection} key={item.title}>
              <h3 className={classes.aboutTopic}>{item.title}</h3>
              <p className={classes.aboutText}>{item.text[0]}</p>

              {item.text[1] && (
                <p className={classes.aboutText}>{item.text[1]}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
