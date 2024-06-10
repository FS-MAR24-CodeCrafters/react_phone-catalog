import { Link } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import classes from './Category.module.scss';
import { getGoods } from '../../../api/goods';
import { Gadget } from '../../../types/gadget';

type CategoryItemProps = {
  link: string;
  description: string;
  background: string;
};

export const CategoryItem: FC<CategoryItemProps> = ({
  link,
  description,
  background,
}) => {
  const [goodsQty, setGoodsQty] = useState<number>();

  window.console.log(link, description, background);
  useEffect(() => {
    getGoods<Gadget[]>(`${link}.json`).then((res) => {
      return setGoodsQty(res.length);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className={classes.category__card}>
      <Link
        to={link}
        className={classes.category__img}
        style={{
          background: `${background}`,
        }}
      />
      <div className={classes.category__description}>
        <Link to={link} className={classes.category__description_title}>
          {description}
        </Link>
        {goodsQty ? (
          <p className={classes.category__qty}>{`${goodsQty} models`}</p>
        ) : (
          <div
            className={`${classes.skeleton} ${classes.skeleton__description}`}
          />
        )}
      </div>
    </article>
  );
};
