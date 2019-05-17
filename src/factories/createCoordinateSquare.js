// @flow

import type {
  CoordinateSquareColorType,
  CoordinateSquareStyleType,
  CoordinateSquareType
} from '../types';

export default (
  x: number,
  y: number,
  name: string = '',
  style: CoordinateSquareStyleType = 'single',
  color: CoordinateSquareColorType = null
): CoordinateSquareType => {
  return {
    color,
    name,
    style,
    x,
    y
  };
};
