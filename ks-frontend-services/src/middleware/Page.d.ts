import { FunctionComponent, type PropsWithChildren } from 'react';
import type { PathKey } from '../store/types';
import type { StringIndexedObject } from '../types';
export interface PageProps<P extends StringIndexedObject> {
    pathKey?: PathKey<P>;
}
export interface WrapperProps {
    children: JSX.Element;
}
export declare function createPage(Wrapper?: FunctionComponent<WrapperProps>): <P extends StringIndexedObject<any>>({ pathKey, }: PropsWithChildren<PageProps<P>>) => import("react/jsx-runtime").JSX.Element;
