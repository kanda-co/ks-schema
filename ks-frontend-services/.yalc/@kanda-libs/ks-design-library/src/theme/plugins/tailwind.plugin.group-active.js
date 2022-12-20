const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, e }) => {
  addVariant('group-active', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const eClassName = e(`group-active${separator}${className}`);
      return `.group:active .${eClassName}`;
    });
  });
});
