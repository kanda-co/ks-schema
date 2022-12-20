export type TagColor = 'grey' | 'violet' | 'lavender' | 'green' | 'blue' | null;

export interface TagProps {
  className?: string;
  label?: string;
  children?: JSX.Element | JSX.Element[];
  color?: TagColor;
  size?: 31 | 28 | 24 | 21;
  /**
   * Tag variant name
   */
  variant?: 'solid' | 'outline';
}
