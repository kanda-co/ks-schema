export type StatusTagStatus = 'draft' | 'sent' | 'accepted' | 'declined';

declare module 'react-timeago/lib/formatters/buildFormatter' {
  import type { Formatter } from 'react-timeago';
  const buildFormatter: (formatter: Formatter) => Formatter;
  export default buildFormatter;
}
