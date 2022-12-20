const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, e }) => {
  addVariant('field-loading', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const eClassName = e(`field-loading${separator}${className}`);
      return `.field-loading .${eClassName}`;
    });
  });
});
