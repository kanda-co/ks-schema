import { createContext } from 'react';

export type LoadingProviderContext = boolean;

export const Context = createContext<LoadingProviderContext>(false);
