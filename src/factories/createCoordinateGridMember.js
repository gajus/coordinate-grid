// @flow

import type {
  CoordinateGridMemberType
} from '../types';

export default (
  x: number,
  y: number,
  body: string
): CoordinateGridMemberType => {
  return {
    body,
    x,
    y
  };
};
