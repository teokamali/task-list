import { apiMiddleware } from '@api/apiMiddleware';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { rootReducer } from './rootReducer';

export const makeStore = ({ isServer }: any) => {
  if (typeof isServer === undefined || isServer) {
    isServer = typeof window === 'undefined';
  }
  if (isServer) {
    //If it's on server side, create a store
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware().concat(apiMiddleware),
    });
  } else {
    /* istanbul ignore next */
    const storage = require('redux-persist/lib/storage').default;

    /* istanbul ignore next */
    const persistConfig = {
      key: 'root',
      version: 1,
      whitelist: ['auth'],
      storage,
    };

    /* istanbul ignore next */
    const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

    const config = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(apiMiddleware),
    });

    /* istanbul ignore next */
    const store = {
      ...config,
      __persistor: persistStore(config),
    };

    /* istanbul ignore next */
    return store;
  }
};
type Store = ReturnType<typeof makeStore>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
export const wrapper = createWrapper<any>(makeStore);
