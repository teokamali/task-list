import { useAuth } from '@hooks/useAuth';
import { useAppDispatch } from '@redux/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  IBaseComponentParams,
  IBaseComponentReturnType,
  IBaseState,
  IBaseVoidProps,
} from './BaseInterface';

export const useBaseComponent = <
  P extends IBaseVoidProps = {},
  S extends IBaseState = {},
  H = any,
>(
  params?: IBaseComponentParams<P, S>,
): IBaseComponentReturnType<S, H> => {
  const {
    props = {} as P,
    initialState = {} as S,
    helperHook,
  } = params ?? { initialState: {} as S };

  const [state, pureSetState] = useState<S>(initialState);
  const router = useRouter();
  const isAuthenticated = useAuth();
  const currency: string = process.env.CURRENCY ?? 'Dollar';
  const dispatch = useAppDispatch();
  const setState = (newState: Partial<S>) => {
    pureSetState({
      ...state,
      ...newState,
    });
  };

  const helper = helperHook?.({
    props,
    state,
    router,
    isAuthenticated,
    setState,
    dispatch,
    pureSetState,
  });

  return {
    state,
    helper,
    currency,
    router,
    setState,
    dispatch,
    isAuthenticated,
    pureSetState,
  };
};
