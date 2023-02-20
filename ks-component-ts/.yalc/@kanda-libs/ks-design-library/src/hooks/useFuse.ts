import Fuse from 'fuse.js';
import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { useDebounce } from 'use-debounce';
import type { StringIndexedObject } from '~/types';

export interface FuseValue<T = StringIndexedObject> {
  docs: T[];
}

export interface FuseHook<T extends FuseValue> {
  hits: {
    item: T;
    refIndex: number;
  }[];
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  setQuery: Dispatch<SetStateAction<string>>;
  query: string;
}

export default function useFuse<T extends FuseValue>(
  list: T[],
  options: StringIndexedObject,
  initialQuery: string,
  debounce: number = 100,
): FuseHook<T> {
  const isMounted = useRef(false);

  const [originalQuery, setQuery] = useState(initialQuery || '');
  const [query] = useDebounce(originalQuery, debounce || 100);

  // let's memoize the fuse instance for performances
  const fuse = useMemo(() => {
    const { limit, matchAllOnEmptyQuery, ...fuseOptions } = options;

    return new Fuse(list, fuseOptions);
  }, [list, options]);

  // memoize results whenever the query or options change
  const hits = useMemo(
    // if query is empty and `matchAllOnEmptyQuery` is `true` then return all list
    // NOTE: we remap the results to match the return structure of `fuse.search()`
    () =>
      !query && options.matchAllOnEmptyQuery
        ? (fuse.getIndex() as unknown as FuseValue<T>).docs
            .slice(0, options.limit)
            .map((item: T, refIndex: number) => ({ item, refIndex }))
        : fuse.search(query, { limit: options.limit }),
    [fuse, options, query],
  );

  // pass a handling helper to speed up implementation
  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value.trim()),
    [setQuery],
  );

  /**
   * Handle mount
   * */
  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  // still returning `setQuery` for custom handler implementations
  return {
    hits,
    handleSearch,
    setQuery,
    query,
  };
}
