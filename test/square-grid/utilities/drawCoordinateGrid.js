// @flow

import test from 'ava';
import drawCoordinateGrid from '../../../src/utilities/drawCoordinateGrid';
import createCoordinateSquare from '../../../src/factories/createCoordinateSquare';

test('draws a coordinate square', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateSquare(0, 0, 'A1')
  ]);

  t.is(coordinateGrid, '┌────┐\n│ A1 │\n└────┘');
});

test('draws coordinate squares (multiple columns)', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateSquare(0, 0, 'A1'),
    createCoordinateSquare(1, 0, 'A2')
  ]);

  t.is(coordinateGrid, '┌────┐┌────┐\n│ A1 ││ A2 │\n└────┘└────┘');
});

test('draws coordinate squares (multiple rows)', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateSquare(0, 0, 'A1'),
    createCoordinateSquare(0, 1, 'B1')
  ]);

  t.is(coordinateGrid, '┌────┐\n│ A1 │\n└────┘\n┌────┐\n│ B1 │\n└────┘');
});

test('draws empty-borderlesss square when coordinate is absent', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateSquare(0, 0, 'A1'),
    createCoordinateSquare(2, 0, 'A3')
  ]);

  t.is(coordinateGrid, '┌────┐      ┌────┐\n│ A1 │      │ A3 │\n└────┘      └────┘');
});

test('draws README example', (t) => {
  const coordinateGrid = drawCoordinateGrid([
    createCoordinateSquare(0, 0, 'A1'),
    createCoordinateSquare(1, 0, 'A2', 'double'),
    createCoordinateSquare(2, 0, 'A3', 'borderless'),
    createCoordinateSquare(1, 1, 'B2', 'single', 'green'),
    createCoordinateSquare(1, 2, 'B3'),
    createCoordinateSquare(2, 2, 'C3', 'single', 'red')
  ]);

  t.is(coordinateGrid, '┌────┐╔════╗      \n│ A1 │║ A2 ║  A3  \n└────┘╚════╝      \n      \u001b[32m┌────┐\u001b[39m      \n      \u001b[32m│ B2 │\u001b[39m      \n      \u001b[32m└────┘\u001b[39m      \n      ┌────┐\u001b[31m┌────┐\u001b[39m\n      │ B3 │\u001b[31m│ C3 │\u001b[39m\n      └────┘\u001b[31m└────┘\u001b[39m');
});
