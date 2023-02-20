const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
  const buttons = {
    '.text-32-40-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.4xl'),
      lineHeight: theme('lineHeight.10'),
    },
    '.text-28-32-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.3xl'),
      lineHeight: theme('lineHeight.8'),
    },
    '.text-24-28-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.2xl'),
      lineHeight: theme('lineHeight.7'),
    },
    '.text-20-24-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.xl'),
      lineHeight: theme('lineHeight.6'),
    },
    '.text-18-22-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight[5.5]'),
    },
    '.text-16-25-em-up': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight[6.25]'),
      textTransform: 'uppercase',
    },
    '.text-16-20-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.5'),
    },
    '.text-16-24': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.6'),
    },
    '.text-14-22-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight[5.5]'),
    },
    '.text-14-22': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight[5.5]'),
    },
    '.text-12-18-em-up': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight[5.4]'),
      textTransform: 'uppercase',
    },
    '.text-12-18-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight[5.4]'),
    },
    '.text-12-18': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight[5.4]'),
    },
    '.text-11-20-em-up': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.xxs'),
      lineHeight: theme('lineHeight.5'),
      textTransform: 'uppercase',
    },
    '.text-11-20-up': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.xxs'),
      lineHeight: theme('lineHeight.5'),
      textTransform: 'uppercase',
    },
    '.text-10-17-em-up': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.tiny'),
      lineHeight: theme('lineHeight[4.25]'),
      textTransform: 'uppercase',
    },
    '.text-10-17-em': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.tiny'),
      lineHeight: theme('lineHeight[4.25]'),
      textTransform: 'uppercase',
    },
    '.text-10-14-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.tiny'),
      lineHeight: theme('lineHeight[3.5]'),
    },
    '.text-10-14': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.tiny'),
      lineHeight: theme('lineHeight[3.5]'),
    },
    /** depricated: */
    '.text-style-a': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.4xl'),
      lineHeight: theme('lineHeight.10'),
    },
    '.text-style-b': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.3xl'),
      lineHeight: theme('lineHeight.8'),
    },
    '.text-style-c': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.2xl'),
      lineHeight: theme('lineHeight.7'),
    },
    '.text-style-d': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.xl'),
      lineHeight: theme('lineHeight.6'),
    },
    '.text-style-e': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight[5.5]'),
    },
    '.text-style-f-em-up': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight[6.25]'),
      textTransform: 'uppercase',
    },
    '.text-style-f-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.5'),
    },
    '.text-style-f': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.6'),
    },
    '.text-style-g-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight[5.5]'),
    },
    '.text-style-g': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight[5.5]'),
    },
    '.text-style-h-em-up': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight[5.4]'),
      textTransform: 'uppercase',
    },
    '.text-style-h-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight[5.4]'),
    },
    '.text-style-h': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight[5.4]'),
    },
    '.text-style-i-em-up': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.xxs'),
      lineHeight: theme('lineHeight.5'),
      textTransform: 'uppercase',
    },
    '.text-style-i-up': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.xxs'),
      lineHeight: theme('lineHeight.5'),
      textTransform: 'uppercase',
    },
    '.text-style-i': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.xxs'),
      lineHeight: theme('lineHeight.5'),
    },
    '.text-style-j-em-up': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.tiny'),
      lineHeight: theme('lineHeight[4.25]'),
      textTransform: 'uppercase',
    },
    '.text-style-k-em': {
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.tiny'),
      lineHeight: theme('lineHeight[3.5]'),
    },
    '.text-style-k': {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.tiny'),
      lineHeight: theme('lineHeight[3.5]'),
    },
    /** end-depricated */
  };

  addComponents(buttons, {
    variants: ['responsive', 'important'],
  });
});
