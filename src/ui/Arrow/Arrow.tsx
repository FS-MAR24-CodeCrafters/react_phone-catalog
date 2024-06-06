import { FC } from 'react';
import { arrowDir } from '../../types/arrowEnum';

import classes from './Arrow.module.scss';
import { ArrowDown } from './arrows/ArrowDown';
import { ArrowUp } from './arrows/ArrowUp';
import { ArrowLeft } from './arrows/ArrowLeft';
import { ArrowRight } from './arrows/ArrowRight';

type ArrowProps = {
  dir: arrowDir; // for using this component you should use arrowDir enum to clarify direction;
  disabled?: boolean; // disabled button or not;
};

export const Arrow: FC<ArrowProps> = ({ dir, disabled = false }) => {
  let arrowComponent;

  const color = disabled ? '#e2e6e9' : '#313237';

  if (dir === arrowDir.down) {
    arrowComponent = <ArrowDown width={5} height={9} fill={color} />;
  }

  if (dir === arrowDir.up) {
    arrowComponent = <ArrowUp width={5} height={9} fill={color} />;
  }

  if (dir === arrowDir.right) {
    arrowComponent = <ArrowRight width={9} height={5} fill={color} />;
  }

  if (dir === arrowDir.left) {
    arrowComponent = <ArrowLeft width={9} height={5} fill={color} />;
  }

  return (
    <button
      className={`${classes.button} ${disabled && classes.disabled}`}
      {...(disabled && { disabled: true })}
    >
      {arrowComponent}
    </button>
  );
};
