import { FunctionComponent, type PropsWithChildren } from 'react';
import type { PathKey } from '../store/types';
import type { StringIndexedObject } from '../types';
import { getInitialDataPathKeyLayout } from './';

export interface PageProps<P extends StringIndexedObject> {
  pathKey?: PathKey<P>;
}

export interface WrapperProps {
  children: JSX.Element;
}

export function createPage(
  Wrapper: FunctionComponent<WrapperProps> = ({ children }) => <>{children}</>,
) {
  return function Page<P extends StringIndexedObject>({
    pathKey,
  }: PropsWithChildren<PageProps<P>>) {
    const Layout = getInitialDataPathKeyLayout(pathKey);

    return (
      <Wrapper>
        <Layout />
      </Wrapper>
    );
  };
}
