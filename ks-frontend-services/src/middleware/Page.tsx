import { type PropsWithChildren } from 'react';
import type { PathKey } from '../store/types';
import type { StringIndexedObject } from '../types';
import { getInitialDataPathKeyLayout } from './';

export interface PageProps<P extends StringIndexedObject> {
  pathKey?: PathKey<P>;
}

function Page<P extends StringIndexedObject>({
  pathKey,
}: PropsWithChildren<PageProps<P>>) {
  const Layout = getInitialDataPathKeyLayout(pathKey);

  return <Layout />;
}

export default Page;
