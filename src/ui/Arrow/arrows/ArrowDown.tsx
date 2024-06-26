import { FC } from 'react';

type Props = {
  width: number;
  height: number;
  fill: string;
};

export const ArrowDown: FC<Props> = ({ height, width, fill }) => {
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
        d="M9.47149 0.528636C9.73184 0.788986 9.73184 1.2111 9.47149 1.47145L5.47149 5.47144C5.21114 5.73179 4.78903 5.73179 4.52868 5.47144L0.528677 1.47144C0.268327 1.2111 0.268327 0.788985 0.528677 0.528636C0.789026 0.268286 1.21114 0.268286 1.47149 0.528636L5.00008 4.05723L8.52868 0.528636C8.78903 0.268287 9.21114 0.268287 9.47149 0.528636Z"
        fill={fill}
      />
    </svg>
  );
};
