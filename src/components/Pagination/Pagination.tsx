import React from 'react';
import { useSearchParams } from 'react-router-dom';
// import cn from 'classnames';

import classes from './Pagination.module.scss';
import { Arrow } from '../../ui/Arrow/Arrow';
import { arrowDir } from '../../types/arrowEnum';
import { PageNumber } from '../../ui/PageNumber';

type PaginationProps = {
  totalPages: number;
};

export const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = +(searchParams.get('page') || '1');

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', `${page}`);
    setSearchParams(params);
  };

  const pages = [];
  // eslint-disable-next-line
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Arrow dir={arrowDir.left} disabled={currentPage === 1} />
        {/* arrow */}
      </button>
      {pages.map((page) => (
        <PageNumber
          pageNum={page}
          key={page}
          selected={page === currentPage}
          handleClick={handlePageChange}
        />
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Arrow dir={arrowDir.right} disabled={currentPage === totalPages} />
        {/* arrow */}
      </button>
    </div>
  );
};
