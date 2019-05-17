// @flow

export type CoordinateSquareColorType = null | 'green' | 'red' | 'yellow' | 'blue';
export type CoordinateSquareStyleType = 'single' | 'double' | 'borderless';

export type CoordinateSquareType = {|
  +color: CoordinateSquareColorType,
  +name: string,
  +style: CoordinateSquareStyleType,
  +x: number,
  +y: number
|};
