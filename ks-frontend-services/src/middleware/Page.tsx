import React, { type PropsWithChildren } from 'react';
import type { PathKey } from '../store/types';
import type { StringIndexedObject } from '../types';
import type { PageList } from './types';
import { getInitialDataPathKeyLayout } from './';

export interface PageProps<P extends StringIndexedObject> {
  pathKey?: PathKey<P>;
  pages: PageList<P>;
}

function Page<P extends StringIndexedObject>({
  pages,
  pathKey,
}: PropsWithChildren<PageProps<P>>) {
  // Call Page component instead

  const Layout = getInitialDataPathKeyLayout(pages, pathKey);

  return <Layout />;
}

export default Page;
