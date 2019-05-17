// @flow

import test from 'ava';
import chalk from 'chalk';
import drawCoordinateSquare from '../../../src/utilities/drawCoordinateSquare';

test('draws a coordinate square (style: single)', (t) => {
  const coordinateSquare = drawCoordinateSquare('A1', 'single');

  t.is(coordinateSquare, '┌────┐\n│ A1 │\n└────┘');
});

test('draws a coordinate square (style: double)', (t) => {
  const coordinateSquare = drawCoordinateSquare('A1', 'double');

  t.is(coordinateSquare, '╔════╗\n║ A1 ║\n╚════╝');
});

test('draws a coordinate square (style: borderless)', (t) => {
  const coordinateSquare = drawCoordinateSquare('A1', 'borderless');

  t.is(coordinateSquare, '      \n  A1  \n      ');
});

test('draws a coordinate square (color: red)', (t) => {
  const coordinateSquare = drawCoordinateSquare('A1', 'single', 'red');

  t.is(coordinateSquare, chalk.red('┌────┐\n│ A1 │\n└────┘'));
});
