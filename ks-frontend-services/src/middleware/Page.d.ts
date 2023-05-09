import { type PropsWithChildren } from 'react';
import type { PathKey } from '../store/types';
import type { StringIndexedObject } from '../types';
import type { PageList } from './types';
export interface PageProps<P extends StringIndexedObject> {
    pathKey?: PathKey<P>;
    pages: PageList<P>;
}
declare function Page<P extends StringIndexedObject>({ pages, pathKey, }: PropsWithChildren<PageProps<P>>): JSX.Element;
export default Page;
