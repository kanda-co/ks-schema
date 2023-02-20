declare module '*.svg' {
  import { type FunctionComponent } from 'react';
  export const ReactComponent: FunctionComponent<{
    className?: string;
    children?: JSX.Element | JSX.Element[];
    width?: number;
    height?: number;
  }>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}
