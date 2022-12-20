const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, e }) => {
  addVariant('label-checked', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const eClassName = e(`label-checked${separator}${className}`);
      return `input[type="checkbox"]:checked ~ .${eClassName},input[type="radio"]:checked ~ .${eClassName}`;
    });
  });
});
