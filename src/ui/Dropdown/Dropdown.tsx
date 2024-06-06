import React, { useState, useEffect, useRef } from 'react';
import classes from './Dropdown.module.scss';
import { ArrowDown } from '../Arrow/arrows/ArrowDown';

type Props = {
  type: 'itemsOnPage' | 'sortBy';
};

const items = ['16', '32', '64', '128'];

export const Dropdown: React.FC<Props> = ({ type }) => {
  const [selectedItem, setSelectedItem] = useState<string>(items[0]);
  const [isOpen, setIsOpen] = useState(false);
  const coverRef = useRef<HTMLButtonElement>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
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

  const label = type === 'sortBy' ? 'Sort By' : 'Items on Page';
  const widthClass = type === 'sortBy' ? classes.sortBy : classes.itemsOnPage;

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
        {items.map((item) => (
          <li key={item}>
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
