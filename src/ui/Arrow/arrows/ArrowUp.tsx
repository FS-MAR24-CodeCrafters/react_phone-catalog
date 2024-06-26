import { FC } from 'react';

type Props = {
  width: number;
  height: number;
  fill: string;
};
export const ArrowUp: FC<Props> = ({ height, width, fill }) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 10 6"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.528758 5.47136C0.268409 5.21101 0.268409 4.7889 0.528758 4.52855L4.52876 0.528555C4.78911 0.268206 5.21122 0.268206 5.47157 0.528556L9.47157 4.52856C9.73192 4.78891 9.73192 5.21102 9.47157 5.47137C9.21122 5.73171 8.78911 5.73171 8.52876 5.47136L5.00016 1.94277L1.47157 5.47136C1.21122 5.73171 0.789108 5.73171 0.528758 5.47136Z"
        fill={fill}
      />
    </svg>
  );
};
