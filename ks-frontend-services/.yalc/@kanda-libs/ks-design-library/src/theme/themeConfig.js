/**
 * Creates dataurl from svg string
 * @param {String} svgStr
 * @returns {String} dataurl
 */
const svgToDataURL = (svgStr) => {
  const encoded = encodeURIComponent(svgStr)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');

  const header = 'data:image/svg+xml,';
  const dataUrl = header + encoded;

  return dataUrl;
};

/**
 * Creates url string from svg
 * @param {String} svg
 * @returns {String} dataurl
 */
const makeSvg = (svg) => `url(${svgToDataURL(svg)})`;

module.exports = {
  theme: {
    colors: {
      // Neutrals
      transparent: 'transparent',
      'transparent-white': 'rgba(255,255,255,0)',
      'neutral-000': '#FFFFFF',
      'neutral-50': '#FBFCFE',
      'neutral-100': '#F7F9FC',
      'neutral-200': '#EDF1F7',
      'neutral-300': '#E0E7F0',
      'neutral-400': '#C3CFDF',
      'neutral-500': '#9CADC4',
      'neutral-600': '#6C819D',
      'neutral-700': '#475A76',
      'neutral-800': '#2D3D53',
      'neutral-900': '#0D1B2E',
      // Primary
      'green-100': '#E9FCF8',
      'green-200': '#C1F4E9',
      'green-300': '#7DE8D6',
      'green-400': '#27DEBF',
      'green-500': '#1FCCAF',
      'green-600': '#1CB69C',
      // Accents
      'lavender-100': '#F0F0FF',
      'lavender-200': '#7F83FF',
      'lavender-300': '#4D52FF',
      'violet-100': '#F3EBFA',
      'violet-150': '#C199E5', // should be 200 TODO: rename app pacakages
      'violet-200': '#622698', // should be 300 TODO: rename app pacakages
      'orchid-100': '#F5E5FF',
      'orchid-200': '#D28FFF',
      'orange-100': '#FDF0E8',
      'orange-150': '#F4B88F', // should be 200 TODO: rename app pacakages
      'orange-200': '#EB7D32', // should be 300 TODO: rename app pacakages
      'blue-100': '#E5F5FF',
      'blue-200': '#009BFF',
      'red-100': '#FFE5F4',
      'red-150': '#F5A3B1', // should be 200 TODO: rename app pacakages
      'red-200': '#E93F3F', // should be 300 TODO: rename app pacakages
      // Depricated
      'turquoise-100': '#E9FCF8',
      'turquoise-200': '#C1F4E9',
      'turquoise-300': '#27DEBF',
      'turquoise-400': '#1FCCAF',
      'turquoise-500': '#1CB69C',
    },
    fill: (theme) => ({
      ...theme('colors'),
    }),
    lineHeight: {
      unset: 'unset !important',
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3.5: '14px',
      4.25: '17px',
      5.4: '18px',
      5: '20px',
      5.5: '22px',
      6: '24px',
      6.25: '25px',
      7: '28px',
      8: '32px',
      10: '40px',
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      0.75: '3px',
      1: '4px',
      1.5: '6px',
      1.75: '7px',
      2: '8px',
      2.25: '9px',
      2.5: '10px',
      3: '12px',
      3.25: '13px',
      3.5: '14px',
      4: '16px',
      4.5: '18px',
      5: '20px',
      5.25: '21px',
      5.5: '22px',
      6: '24px',
      7: '28px',
      7.75: '31px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      18: '72px',
      20: '80px',
      22: '88px',
      24: '96px',
      26: '104px',
      28: '112px',
      30: '120px',
      32: '128px',
      36: '144px',
      38: '152px',
      40: '160px',
      44: '176px',
      48: '192px',
      50: '200px',
      52: '208px',
      54: '216px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      75: '300px',
      80: '320px',
      96: '384px',
      100: '400px',
      120: '480px',
      160: '640px',
      170: '680px',
      180: '720px',
      256: '1024px',
      272: '1088px',
    },
    fontSize: {
      tiny: '10px',
      xxs: '11px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '48px',
      '7xl': '60px',
      '8xl': '72px',
    },
    extend: {
      screens: {
        desktop: '1440px',
      },
      animation: {
        'fade-in-5': 'fade-in-5 200ms ease-in-out',
        'fade-out-5': 'fade-out-5 200ms ease-in-out',
        'fade-in': 'fade-in 200ms ease-in-out',
        'fade-out': 'fade-out 200ms ease-in-out',
        'slide-up-in': 'slide-up-in 200ms ease-in-out',
        'slide-up-out': 'slide-up-out 200ms ease-in-out',
        'slide-left-in': 'slide-left-in 200ms ease-in-out',
        'slide-left-out': 'slide-left-out 200ms ease-in-out',
      },
      keyframes: {
        'fade-in-5': {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.05 },
        },
        'fade-out-5': {
          '0%': { opacity: 0.05 },
          '100%': { opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'slide-up-in': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'slide-up-out': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'slide-left-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'slide-left-out': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      scale: {
        '-1': '-1',
      },
      transitionDuration: {
        3000: '3000ms',
      },
      transitionProperty: {
        width: 'width',
      },
      fontFamily: {
        sans: ['"Galano Grotesque"'],
      },
      backgroundPosition: {
        'right-4': 'calc(100% - 20px) center',
      },
      height: {
        table: '696px',
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
        52: '210px',
        table: '696px',
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
        52: '210px',
        table: '696px',
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
        120: '480px',
        180: '720px',
        256: '1024px',
        272: '1088px',
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
        120: '480px',
        180: '720px',
        256: '1024px',
        272: '1088px',
      }),
      boxShadow: {
        a: '0px 12px 12px 0px rgba(237, 241, 247, 0.5), 0px 4px 8px 0px rgba(237, 241, 247, 1)',
        c: '0px -4px 24px rgba(13, 27, 46, 0.1)',
        checkout:
          '0px -1px 0px rgba(225, 230, 241, 0.5), 0px -4px 24px rgba(12, 27, 58, 0.1)',
        card: '0px 4px 8px 0px #0C1B3A0D',
        popover: '0px 2px 4px rgba(13, 27, 46, 0.1)',
      },
      skew: {
        'slide-up': '-3.75deg',
      },
      backgroundSize: {
        100: '100%',
        200: '200%',
      },
      transformOrigin: {
        0: '0%',
        full: '100%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'select-chevron': makeSvg(
          '<svg style="color: #9CA9C4" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33331 1L5.99998 6.33333L10.6666 1" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        ),
        'select-chevron-active': makeSvg(
          '<svg style="color: #27DEBF" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33331 7.00002L5.99998 1.66669L10.6666 7.00002" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        ),
        'placeholder-card': makeSvg(`
          <svg viewBox="0 0 330 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect vector-effect="non-scaling-stroke" x="17" y="1" width="293" height="76" rx="11" />
              <rect vector-effect="non-scaling-stroke" x="32" y="20" width="104" height="16" rx="8" fill="#EDF0F7"/>
              <rect vector-effect="non-scaling-stroke" x="32" y="48" width="144" height="10" rx="5" fill="#EDF0F7"/>
              <rect vector-effect="non-scaling-stroke" x="243" y="20" width="54" height="16" rx="8" fill="#EDF0F7"/>
              <rect vector-effect="non-scaling-stroke" x="17" y="1" width="293" height="76" rx="11" stroke="#EDF0F7" stroke-width="2"/>
          </svg>
        `),
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['focus', 'focus-within', 'important', 'last', 'first'],
      margin: ['last', 'first'],
      padding: ['focus', 'focus-within', 'first', 'last', 'important'],
      textColor: ['invalid', 'disabled', 'active', 'important', 'field-focus'],
      opacity: ['focus', 'focus-within'],
      height: ['focus', 'focus-within'],
      position: ['focus', 'focus-within'],
      borderWidth: [
        'focus',
        'hover',
        'first',
        'last',
        'important',
        'focus-within',
      ],
      backgroundImage: [
        'focus',
        'label-checked',
        'disabled',
        'hover',
        'focus-within',
      ],
      backgroundColor: [
        'disabled',
        'label-checked',
        'checked',
        'active',
        'important',
      ],
      backgroundPosition: ['hover'],
      borderColor: ['label-checked', 'focus', 'focus-within'],
      inset: ['checked'],
      display: ['field-focus', 'field-error', 'field-loading', 'group-hover'],
      translate: ['checked'],
      ringColor: ['disabled', 'hover', 'group-active'],
      stroke: ['active'],
    },
  },
};
