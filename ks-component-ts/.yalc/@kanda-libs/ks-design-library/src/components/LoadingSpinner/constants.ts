export const DEFAULT_SVG_PROPS = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 64 64',
  fill: 'none',
};

export const DEFAULT_ANIMATION_PROPS = {
  attributeName: 'transform',
  type: 'rotate',
  repeatCount: 'indefinite',
};

export const DEFAULT_STROKE_WIDTH = 8;

export const DIRECTIONS = {
  clockwise: {
    from: '0 0 0',
    to: '360 0 0',
  },
  anticlockwise: {
    from: '360 0 0',
    to: '0 0 0',
  },
};

export const PATHS = {
  path1: {
    stroke: 'url(#spinner-secondHalf)',
    d: 'M 60 32 A 28 28 0 0 1 4 32',
  },
  path2: {
    stroke: 'url(#spinner-firstHalf)',
    d: 'M 4 32 A 28 28 0 0 1 60 32',
  },
};

export const LINEAR_GRAIDENT_PROPS = {
  firstHalf: {
    id: 'spinner-firstHalf',
    stop1: {
      offset: '0%',
      stopOpacity: '0.5',
      stopColor: 'currentColor',
    },
    stop2: {
      offset: '100%',
      stopOpacity: '1',
      stopColor: 'currentColor',
    },
  },
  secondHalf: {
    id: 'spinner-secondHalf',
    stop1: {
      offset: '0%',
      stopOpacity: '0.5',
      stopColor: 'currentColor',
    },
    stop2: {
      offset: '100%',
      stopOpacity: '0',
      stopColor: 'currentColor',
    },
  },
};
