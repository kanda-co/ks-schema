import { createStore, createSelectors } from '@kanda-libs/ks-frontend-services';
import { pages } from '../components/shared/App';
import { PageKeys } from '../config';

export const store = createStore<PageKeys>();

store.subscribe(() => {
  // eslint-disable-next-line
  console.log('State changed', store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectors = createSelectors<RootState, typeof pages>();
