const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant }) => {
  addVariant('important', ({ container }) => {
    container.walkRules((rule) => {
      // eslint-disable-next-line no-param-reassign
      rule.selector = `.\\!${rule.selector.slice(1)}`;
      rule.walkDecls((decl) => {
        // eslint-disable-next-line no-param-reassign
        decl.important = true;
      });
    });
  });
});
