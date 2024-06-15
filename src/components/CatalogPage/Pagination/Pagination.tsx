import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Arrow } from '../../../ui/Arrow/Arrow';
import { PageNumber } from '../../../ui/PageNumber';
import { arrowDir } from '../../../types/arrowEnum';
import classes from './Pagination.module.scss';

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

  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }

  return (
    <div className={classes.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label='Previous Page'
      >
        <Arrow dir={arrowDir.left} disabled={currentPage === 1} />
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
        aria-label='Next Page'
      >
        <Arrow dir={arrowDir.right} disabled={currentPage === totalPages} />
      </button>
    </div>
  );
};
