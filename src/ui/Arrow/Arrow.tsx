import { FC } from 'react';
import { arrowDir } from '../../types/arrowEnum';

import classes from './Arrow.module.scss';
import { ArrowDown } from './arrows/ArrowDown';
import { ArrowUp } from './arrows/ArrowUp';
import { ArrowLeft } from './arrows/ArrowLeft';
import { ArrowRight } from './arrows/ArrowRight';
import { useThemeLocalStorage } from '../../hooks/useThemeLocalStorage';

type ArrowProps = {
  dir: arrowDir;
  disabled?: boolean;
};

export const Arrow: FC<ArrowProps> = ({ dir, disabled = false }) => {
  const { isThemeDark } = useThemeLocalStorage();
  let arrowComponent;

  let color = disabled ? '#e2e6e9' : '#313237';

  if (isThemeDark) {
    color = disabled ? '#4A4D58' : '#F1F2F9';
  }

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
    <div
      className={`${classes.button} ${disabled && classes.disabled}`}
      {...(disabled && { disabled: true })}
    >
      {arrowComponent}
    </div>
  );
};
