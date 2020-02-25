// @flow

export type SquareColorType = null | 'green' | 'red' | 'yellow' | 'blue';
export type SquareStyleType = 'single-character' | 'single' | 'double' | 'borderless';

export type CoordinateGridMemberType = {|
  +body: string,
  +x: number,
  +y: number,
|};
