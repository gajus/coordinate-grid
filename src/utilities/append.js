// @flow

export default (a: string, b: string): string => {
  const tailTokens = b.split('\n');

  const lines = a.split('\n');

  let index = 0;

  for (const tailToken of tailTokens) {
    index++;

    lines[lines.length - (tailTokens.length - index + 1)] += tailToken;
  }

  return lines.join('\n');
};
