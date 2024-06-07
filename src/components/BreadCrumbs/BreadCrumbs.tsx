import classes from './BreadCrumbs.module.scss';
import homeIcon from '../../img/icons/Home.png';
import { ArrowRight } from '../../ui/Arrow/arrows/ArrowRight';

const BreadCrumbs = () => {
  const fullPath: string[] = [
    'Phones',
    'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
  ];

  return (
    <ul className={classes.path}>
      <li className={classes.path_item}>
        <img
          className={classes.home_img}
          src={homeIcon}
          alt="Return to the main Page"
        />
        <ArrowRight width={9} height={5} fill="#b4bdc3" />
      </li>
      {fullPath.map((path, index, self) => {
        if (index === self.length - 1) {
          return (
            <p key={path} className={`${classes.path_value} ${classes.value_width}`}>
              {path}
            </p>
          );
        }

        return (
          <li className={classes.path_item} key={path}>
            <p
              className={`${classes.path_value} ${index === 0 && classes.item_bold}`}
            >
              {path}
            </p>
            <ArrowRight width={9} height={5} fill="#b4bdc3" />
          </li>
        );
      })}
    </ul>
  );
};

export default BreadCrumbs;
