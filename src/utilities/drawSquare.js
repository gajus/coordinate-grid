// @flow

import chalk from 'chalk';
import boxStyles from 'cli-boxes';
import {
  pad,
} from 'lodash';
import type {
  SquareColorType,
  SquareStyleType,
} from '../types';

export default (name: string, styleName: SquareStyleType = 'single', color: SquareColorType = null): string => {
  const size = 6;
  const body = pad(name, size - 2);

  let style;

  if (styleName === 'single') {
    style = boxStyles.single;
  } else if (styleName === 'double') {
    style = boxStyles.double;
  } else if (styleName === 'borderless') {
    style = {
      bottomLeft: ' ',
      bottomRight: ' ',
      horizontal: ' ',
      topLeft: ' ',
      topRight: ' ',
      vertical: ' ',
    };
  } else {
    throw new Error('Unexpected style.');
  }

  let square = [];

  square.push(style.topLeft + style.horizontal.repeat(size - 2) + style.topRight);
  square.push(style.vertical + body + style.vertical);
  square.push(style.bottomLeft + style.horizontal.repeat(size - 2) + style.bottomRight);

  square = square.join('\n');

  if (color) {
    // $FlowFixMe
    square = chalk[color](square);
  }

  return square;
};
