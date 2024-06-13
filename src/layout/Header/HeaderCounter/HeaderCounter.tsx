import classes from './HeaderCounter.module.scss';

type Props = {
  quantity: number;
};

export const HeaderCounter: React.FC<Props> = ({ quantity }) => (
  <div className={classes.quantityWrap}>
    <p className={classes.quantity}>{quantity > 9 ? `9+` : quantity}</p>
  </div>
);
