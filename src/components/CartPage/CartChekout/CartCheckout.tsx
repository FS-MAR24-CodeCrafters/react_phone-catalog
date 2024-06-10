import classes from './CartCheckout.module.scss';

export const CartCheckout = () => {
  return (
    <div className={classes.cartCheckout}>
      <div className={classes.cartPrice}>
        <h2 className={classes.price}>$2700</h2>
        <p className={classes.totalItems}>Total for 3 items</p>
      </div>
      <div className={classes.breackLine} />
      <button className={classes.checkoutButton}>
        <p className={classes.checkout}>Checkout</p>
      </button>
    </div>
  );
};
