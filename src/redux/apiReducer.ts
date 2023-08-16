import { exampleApi } from '@api/example/example';

export const apiReducers = {
  [exampleApi.reducerPath]: exampleApi.reducer,
};
