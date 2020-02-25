// @flow

import test from 'ava';
import stripAnsi from 'strip-ansi';
import createCoordinateGridMember from '../../../src/factories/createCoordinateGridMember';
import drawCoordinateGrid from '../../../src/utilities/drawCoordinateGrid';
import drawSquare from '../../../src/utilities/drawSquare';

test('draws a coordinate square', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateGridMember(0, 0, drawSquare('A1')),
  ]);

  t.is(coordinateGrid, '┌────┐\n│ A1 │\n└────┘');
});

test('draws coordinate squares (multiple columns)', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateGridMember(0, 0, drawSquare('A1')),
    createCoordinateGridMember(1, 0, drawSquare('A2')),
  ]);

  t.is(coordinateGrid, '┌────┐┌────┐\n│ A1 ││ A2 │\n└────┘└────┘');
});

test('draws coordinate squares (multiple rows)', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateGridMember(0, 0, drawSquare('A1')),
    createCoordinateGridMember(0, 1, drawSquare('B1')),
  ]);

  t.is(coordinateGrid, '┌────┐\n│ A1 │\n└────┘\n┌────┐\n│ B1 │\n└────┘');
});

test('draws empty-borderlesss square when coordinate is absent', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateGridMember(0, 0, drawSquare('A1')),
    createCoordinateGridMember(2, 0, drawSquare('A3')),
  ]);

  t.is(coordinateGrid, '┌────┐      ┌────┐\n│ A1 │      │ A3 │\n└────┘      └────┘');
});

test('draws README example (boxes)', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateGridMember(0, 0, drawSquare('A1')),
    createCoordinateGridMember(1, 0, drawSquare('A2', 'double')),
    createCoordinateGridMember(2, 0, drawSquare('A3', 'borderless')),
    createCoordinateGridMember(1, 1, drawSquare('B2', 'single', 'green')),
    createCoordinateGridMember(1, 2, drawSquare('C2')),
    createCoordinateGridMember(2, 2, drawSquare('C3', 'single', 'red')),
  ]);

  t.is(stripAnsi(coordinateGrid), '┌────┐╔════╗      \n│ A1 │║ A2 ║  A3  \n└────┘╚════╝      \n      ┌────┐      \n      │ B2 │      \n      └────┘      \n      ┌────┐┌────┐\n      │ C2 ││ C3 │\n      └────┘└────┘');
});

test('draws README example (single character)', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateGridMember(0, 0, 'x'),
    createCoordinateGridMember(1, 0, 'x'),
    createCoordinateGridMember(2, 0, 'x'),
    createCoordinateGridMember(1, 1, 'x'),
    createCoordinateGridMember(1, 2, 'x'),
    createCoordinateGridMember(2, 2, 'x'),
  ], '_');

  t.is(coordinateGrid, 'xxx\n_x_\n_xx');
});
