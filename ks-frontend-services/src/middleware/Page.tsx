import React, { type PropsWithChildren } from 'react';
import type { PathKey } from '../store/types';
import type { StringIndexedObject } from '../types';
import type { PageList } from './types';
import { getInitialDataPathKeyLayout } from './';

export interface PageProps<P extends StringIndexedObject> {
  pathKey?: PathKey<keyof P>;
  pages: PageList<P>;
}

function Page<P extends StringIndexedObject>({
  pathKey,
  pages,
}: PropsWithChildren<PageProps<P>>) {
  // Call Page component instead
  const Layout = getInitialDataPathKeyLayout<P>(
    pages,
    pathKey as PathKey<keyof P>,
  );

  return <Layout />;
}

export default Page;
