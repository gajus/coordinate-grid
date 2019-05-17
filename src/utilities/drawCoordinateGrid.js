// @flow

import type {
  CoordinateSquareType
} from '../types';
import drawCoordinateSquare from './drawCoordinateSquare';

const findCoordinateSquare = (x: number, y: number) => {
  return (coordinateSquare) => {
    return coordinateSquare.x === x && coordinateSquare.y === y;
  };
};

const append = (a, b) => {
  const tailTokens = b.split('\n');

  const lines = a.split('\n');

  let index = 0;

  for (const tailToken of tailTokens) {
    index++;

    lines[lines.length - (tailTokens.length - index + 1)] += tailToken;
  }

  return lines.join('\n');
};

export default (coordinateSquares: $ReadOnlyArray<CoordinateSquareType>): string => {
  let maxX = 0;
  let maxY = 0;

  for (const coordinateSquare of coordinateSquares) {
    if (maxX < coordinateSquare.x) {
      maxX = coordinateSquare.x;
    }

    if (maxY < coordinateSquare.y) {
      maxY = coordinateSquare.y;
    }
  }

  let currentY = 0;

  let text = '\n\n';

  while (currentY <= maxY) {
    let currentX = 0;

    while (currentX <= maxX) {
      const coordinateSquare = coordinateSquares.find(findCoordinateSquare(currentX, currentY));

      if (coordinateSquare) {
        text = append(text, drawCoordinateSquare(coordinateSquare.name, coordinateSquare.style, coordinateSquare.color));
      } else {
        text = append(text, drawCoordinateSquare('', 'borderless'));
      }

      currentX++;
    }

    text += '\n\n\n';

    currentY++;
  }

  return text.trim();
};
