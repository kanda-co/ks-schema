import type { IdType } from 'react-table';
import type { Row } from '../../../@types/index';
import Fuse from 'fuse.js';
import type { StringIndexedObject } from '~/types';

const exactMatchSearch = <T extends StringIndexedObject<unknown>>(
  rows: Row<T>[],
  filterValue: string,
) => {
  return rows.filter((row) => {
    // Take all values from the row, and add them together in a string
    // for the purposes of searching
    const rowValues = Object.values(row.values).join(', ');

    return rowValues.toLowerCase().includes(filterValue.toLowerCase());
  });
};

const excludeExactMatches = <T extends StringIndexedObject<unknown>>(
  rows: Row<T>[],
  exactMatchRows: Row<T>[],
) =>
  rows.filter(
    ({ id }) => exactMatchRows.filter((p) => p.id === id).length === 0,
  );

const fuzzySearch = <T extends StringIndexedObject<unknown>>(
  rows: Row<T>[],
  filterValue: string,
  searchKeys: string[],
  numberOfRows: number,
  exactMatchRows: Row<T>[],
): Row<T>[] => {
  const currentRows = rows.map((row) => {
    return row.values;
  });

  const fuse = new Fuse(currentRows, {
    keys: searchKeys.map((key) => ({
      name: key,
      // Because FuseJS allows for dot notation,
      // we need to use a function to get the value
      // as the object returned from the table is flat,
      // rather than nested
      getFn: (obj: StringIndexedObject) => obj[key],
    })),
  });

  const results = fuse
    .search(filterValue)
    .map(({ item }) => item)
    .slice(0, numberOfRows);

  const filteredResults = results
    .map((result) => rows.find((row) => row.values.cid === result.cid))
    .filter(Boolean) as Row<T>[];

  return excludeExactMatches(filteredResults, exactMatchRows);
};

export const globalFilter = <T extends StringIndexedObject<unknown>>(
  rows: Row<T>[],
  searchKeys: IdType<T>[],
  filterValue: string,
  pageSize = 10,
): Row<T>[] => {
  if (filterValue.length < 1) {
    return rows;
  }

  // Get the first 10 exact matches. The reason for this is that exact matching
  // should take presedence over fuzzy matching. An exact match is more useful
  // but also less expensive to compute. So there's no need to do a fuzzy search
  // if there are >= 10 exact matches.
  const exactMatches = exactMatchSearch(rows, filterValue).slice(0, pageSize);
  const currentRowsExcludingExactMatches = excludeExactMatches(
    rows,
    exactMatches,
  );

  const fuzzyMatches = fuzzySearch(
    currentRowsExcludingExactMatches,
    filterValue,
    searchKeys,
    pageSize - exactMatches.length,
    exactMatches,
  );

  const results = [...exactMatches, ...fuzzyMatches];

  // Return the rows in the same order as the original rows
  // to preserve sorting, which happens before fuzzy matching
  return rows
    .map(({ id }) => results.find((row) => row.id === id))
    .filter(Boolean) as Row<T>[];
};
