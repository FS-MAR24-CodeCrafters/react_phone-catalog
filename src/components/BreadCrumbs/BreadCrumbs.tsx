import { Link, useLocation } from 'react-router-dom';
import { FC } from 'react';
import classes from './BreadCrumbs.module.scss';
import homeIcon from '../../img/icons/Home.png';
import { ArrowRight } from '../../ui/Arrow/arrows/ArrowRight';

type BreadCrumbsProps = {
  productName?: string; // this prop is needed for Item card Page only
};

const BreadCrumbs: FC<BreadCrumbsProps> = ({ productName }) => {
  const { pathname } = useLocation();

  const productCategory = pathname.split('/')[1];

  const title = `${productCategory[0].toUpperCase()}${productCategory.slice(1)}`;

  return (
    <ul className={classes.path}>
      <li className={classes.path_item}>
        <Link to="/" className={classes.link}>
          <img
            className={classes.home_img}
            src={homeIcon}
            alt="Return to the main Page"
          />
        </Link>
        <ArrowRight width={9} height={5} fill="#b4bdc3" />
      </li>
      <li className={classes.path_item}>
        <Link to={`/${productCategory}`}>
          <p
            className={`${classes.path_value} ${productName && classes.item_bold}`}
          >
            {title}
          </p>
        </Link>
        {productName && <ArrowRight width={9} height={5} fill="#b4bdc3" />}
      </li>

      {productName && (
        <p className={`${classes.path_value} ${classes.value_width}`}>
          {productName}
        </p>
      )}
    </ul>
  );
};

export default BreadCrumbs;
