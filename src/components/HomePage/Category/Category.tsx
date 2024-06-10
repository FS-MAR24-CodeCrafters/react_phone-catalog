import classes from './Category.module.scss';
import { categories } from '../../../constants/categories';
import { CategoryItem } from './CategoryItem';

export const Category = () => {
  return (
    <section className={classes.category}>
      <div className={classes.category__title_wrapper}>
        <h2 className={classes.category__title}>Shop by category</h2>
      </div>

      <div className={classes.category__wrapper}>
        {categories.map(({
          id,
          link,
          description,
          background,
        }) => (
          <CategoryItem
            key={id}
            link={link}
            description={description}
            background={background}
          />
        ))}
      </div>
    </section>
  );
};
