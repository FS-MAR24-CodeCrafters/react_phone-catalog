import { FC } from 'react';
import classes from './ItemColor.module.scss';

type ItemColorProps = {
  itemColor: string;
  selected: boolean;
};

export const ItemColor: FC<ItemColorProps> = ({ itemColor, selected }) => {
  return (
    <div className={`${classes.box} ${selected && classes.box__selected}`}>
      <div
        className={classes.box__color}
        style={{ backgroundColor: `${itemColor}` }}
      />
    </div>
  );
};
