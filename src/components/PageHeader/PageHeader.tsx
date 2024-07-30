import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

import classes from './PageHeader.module.scss';

type PageHeaderProps = {
  title: string;
  totalModels: number | undefined;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, totalModels }) => {
  return (
    <div className={classes.page__header}>
      <div className={classes.page__bread}>
        <BreadCrumbs />
      </div>

      <h1 className={classes.page__title}>
        {title}
      </h1>

      {totalModels ? (
        <p className={classes.page__models}>
          {`${totalModels} models`}
        </p>
      ) : (
        <div
          className={`${classes.skeleton} ${classes.skeleton__description}`}
        />
      )}
    </div>
  );
};
