// @flow

import test from 'ava';
import chalk from 'chalk';
import drawSquare from '../../../src/utilities/drawSquare';

test('draws a square (style: single)', (t) => {
  const square = drawSquare('A1', 'single');

  t.is(square, '┌────┐\n│ A1 │\n└────┘');
});

test('draws a square (style: double)', (t) => {
  const square = drawSquare('A1', 'double');

  t.is(square, '╔════╗\n║ A1 ║\n╚════╝');
});

test('draws a square (style: borderless)', (t) => {
  const square = drawSquare('A1', 'borderless');

  t.is(square, '      \n  A1  \n      ');
});

test('draws a square (color: red)', (t) => {
  const square = drawSquare('A1', 'single', 'red');

  t.is(square, chalk.red('┌────┐\n│ A1 │\n└────┘'));
});
