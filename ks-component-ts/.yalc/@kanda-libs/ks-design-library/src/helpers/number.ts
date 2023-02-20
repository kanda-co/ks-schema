/**
 * Abbreviate Number
 * @param {Number} value
 * @param {Number} fixed
 *
 * @returns {Array} value suffix
 */
export const abbreviateNumber = (
  value: number,
  fixed = 1,
): (string | number | null)[] => {
  if (value === null) {
    return [null];
  }

  if (value < 100000) {
    return [value];
  }

  const powerParts = value.toPrecision(2).split('e'); // get power

  const suffixIndex =
    powerParts.length === 1
      ? 0
      : Math.floor(
          Math.min(powerParts[1].slice(1) as unknown as number, 14) / 3,
        ); // floor at decimals, ceiling at trillions

  const remainingValue =
    suffixIndex < 1
      ? value.toFixed(0 + fixed)
      : (value / 10 ** (suffixIndex * 3)).toFixed(1 + fixed); // divide by power

  const normalizedValue =
    (remainingValue as unknown as number) < 0
      ? remainingValue
      : Math.abs(remainingValue as unknown as number); // enforce -0 is 0

  const suffix = ['', 'K', 'M', 'B', 'T'][suffixIndex]; // append power

  return [normalizedValue, suffix];
};

/**
 * Returns the formatted currency.
 * The currency has been left as a variable for future proofing.
 *
 * DEV_NOTE: The locale is currently set to 'en-US', but in the future could
 * take any value from https://gist.github.com/ncreated/9934896 to allow
 * formatting from other countries.
 *
 * @param {number} value The price to be converted in the minor currency unit,
 * e.g. for GBP, in pence (£1.23 -> 123)
 * @param {String} currency The 3-letter currency code as defined by ISO 4217,
 * given in uppercase. See here for codes:
 * https://www2.1010data.com/documentationcenter/prod/1010dataReferenceManual/DataTypesAndFormats/currencyUnitCodes.html
 * Defaults to 'GBP'
 * @param {String} locale The locale of the format. Defaults to 'en-US'.
 * @param {Number} minorUnit The minor unit decimal place of the currency.
 * Defaults to 2 (e.g. GBP has 2 minpr units, £1.23)
 */
export const formatToCurrency = (
  value: number,
  currency = 'GBP',
  locale = 'en-US',
  minorUnit = 2,
): string => {
  const majorUnitValue = value / 10 ** minorUnit;
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: minorUnit,
  });
  return formatter.format(majorUnitValue);
};
