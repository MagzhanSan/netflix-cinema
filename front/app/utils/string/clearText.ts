export const onlyText = (
  _string: string,
  limit: null | number = null
): string => {
  let result = _string
    .replace(/<[^>]+>/g, '')
    .replace(/&[^;]+./g, ' ')
    .replace(
      /([\u2700-\u27bf]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDC00-\uDFFF])/g,
      ''
    );
  if (limit) {
    result = result.slice(0, limit) + '...';
  }
  return result;
};
