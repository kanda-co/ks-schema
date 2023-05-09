import { type PropsWithChildren } from 'react';
import type { PathKey } from '../store/types';
import type { StringIndexedObject } from '../types';
export interface PageProps<P extends StringIndexedObject> {
    pathKey?: PathKey<P>;
}
declare function Page<P extends StringIndexedObject>({ pathKey, }: PropsWithChildren<PageProps<P>>): JSX.Element;
export default Page;
