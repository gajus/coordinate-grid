// @flow

import chalk from 'chalk';
import {
  pad
} from 'lodash';
import type {
  CoordinateSquareColorType,
  CoordinateSquareStyleType
} from '../types';

export default (name: string, style: CoordinateSquareStyleType = 'single', color: CoordinateSquareColorType = null): string => {
  const body = pad(name, 4);

  let square;

  if (style === 'single') {
    square = `┌────┐\n│${body}│\n└────┘`;
  } else if (style === 'double') {
    square = `╔════╗\n║${body}║\n╚════╝`;
  } else if (style === 'borderless') {
    square = `      \n ${body} \n      `;
  } else {
    throw new Error('Unexpected style.');
  }

  if (color) {
    // $FlowFixMe
    square = chalk[color](square);
  }

  return square;
};
