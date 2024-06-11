import notFounf from '../../../img/product-not-found.png';
import classes from './ProductNotFound.module.scss';

export const ProductNotFound = () => {
  return (
    <div className={classes.container}>
      <img src={notFounf} alt="Product not found" />
    </div>
  );
};
