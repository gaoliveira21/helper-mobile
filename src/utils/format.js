import { parseISO, format } from 'date-fns';

export const formatPrice = (
  amount,
  decimalCount = 2,
  decimal = ',',
  thousands = '.'
) => {
  decimalCount = Math.abs(decimalCount);
  decimalCount = Number.isNaN(decimalCount) ? 2 : decimalCount;

  const negativeSign = amount < 0 ? '-' : '';

  const i = parseInt(
    (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
    10
  ).toString();
  const j = i.length > 3 ? i.length % 3 : 0;

  return (
    negativeSign +
    (j ? i.substr(0, j) + thousands : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) +
    (decimalCount
      ? decimal +
        Math.abs(amount - i)
          .toFixed(decimalCount)
          .slice(2)
      : '')
  );
};

export const formatDate = (date, formatString = 'dd/MM/yyyy') => {
  if (!date) return null;

  return format(parseISO(date), formatString);
};
