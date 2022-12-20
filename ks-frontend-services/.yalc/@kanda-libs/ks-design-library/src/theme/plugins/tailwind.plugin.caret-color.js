const plugin = require('tailwindcss/plugin');

const generateColors = (e, colors, prefix) =>
  Object.keys(colors).reduce((acc, key) => {
    if (typeof colors[key] === 'string') {
      return {
        ...acc,
        [`${prefix}-${e(key)}`]: {
          'caret-color': colors[key],
        },
      };
    }

    const innerColors = generateColors(e, colors[key], `${prefix}-${e(key)}`);

    return {
      ...acc,
      ...innerColors,
    };
  }, {});

module.exports = plugin.withOptions(
  ({ className = 'caret' } = {}) =>
    ({ e, addUtilities, theme }) => {
      const colors = theme('colors');
      const caretColors = generateColors(e, colors, `.${className}`);

      addUtilities(caretColors, {
        variants: ['responsive'],
      });
    }
);
