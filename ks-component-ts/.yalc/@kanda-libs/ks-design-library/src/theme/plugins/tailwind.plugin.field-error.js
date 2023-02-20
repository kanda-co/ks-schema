const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, e }) => {
  addVariant('field-error', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const eClassName = e(`field-error${separator}${className}`);
      return `.field-error .${eClassName}`;
    });
  });
});
