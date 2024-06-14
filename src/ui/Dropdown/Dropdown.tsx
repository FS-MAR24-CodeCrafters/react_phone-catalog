import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import classes from './Dropdown.module.scss';
import { ArrowDown } from '../Arrow/arrows/ArrowDown';

type Props = {
  type: 'perPage' | 'sort';
};

const itemsPerPage = ['16', '32', '64', '128'];
const sort = ['Newest', 'Cheapest', 'Alphabetically'];

export const Dropdown: React.FC<Props> = ({ type }) => {
  const elements = type === 'perPage' ? itemsPerPage : sort;
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedItem = searchParams.get(type) || elements[0];

  const [isOpen, setIsOpen] = useState(false);
  const coverRef = useRef<HTMLButtonElement>(null);

  const handleItemClick = (item: string) => {
    const params = new URLSearchParams(searchParams);

    params.set(type, item);
    params.set('page', '1');
    setSearchParams(params);

    setIsOpen(false);
  };

  const closeTheModal = () => {
    setIsOpen(false);
  };

  const useClickOutside = (
    ref: React.RefObject<HTMLButtonElement>,
    callback: () => void,
  ) => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    });
  };

  useClickOutside(coverRef, closeTheModal);

  const label = type === 'sort' ? 'Sort by' : 'Items on Page';
  const widthClass = type === 'sort' ? classes.sortBy : classes.itemsOnPage;

  return (
    <>
      <div className={classes.wrapper}>
        <p className={classes.label}>{label}</p>
        <button
          ref={coverRef}
          className={`${classes.dropdown} ${widthClass}`}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setIsOpen(!isOpen);
            }
          }}
        >
          <div className={classes.dropdown_toggles}>{selectedItem}</div>
          <ArrowDown width={5} height={10} fill="#b4bdc3" />
        </button>
      </div>

      <ul
        className={`${classes.dropdown_menu} ${widthClass} ${isOpen && classes.visible}`}
      >
        {elements.map((item) => (
          <li key={item} className={classes.dropdown_item}>
            <button
              onClick={() => handleItemClick(item)}
              className={classes.filterParam}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleItemClick(item);
                }
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
