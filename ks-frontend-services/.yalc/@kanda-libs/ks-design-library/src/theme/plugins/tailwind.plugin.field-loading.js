const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, e }) => {
  addVariant('field-focus', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const eClassName = e(`field-focus${separator}${className}`);
      return `:focus-within > .${eClassName}`;
    });
  });
});
