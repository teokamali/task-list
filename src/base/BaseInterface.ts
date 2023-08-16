import { useAppDispatch } from '@redux/hooks';
import { NextRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import { SetPureStateType, SetStateType } from './BaseType';

export interface ITranslateFunction {
  (key: string, stringFormatData?: string[]): string;
}

export interface IBaseProps {
  children: ReactNode | ReactElement[];
}

export interface IBaseVoidProps {}

export interface IBaseState {}

export interface IConstructor<T> {
  new (...params: any): T;
}

export interface IKeyValue {
  key: string;
  value: string | number | boolean | ReactNode;
}

export interface IAnyKeyValue<T = string> {
  [key: string]: T;
}

export interface ICommonHelperParams<
  P extends IBaseVoidProps = {},
  S extends IBaseState = {},
> {
  props: P;
  state: S;
  router: NextRouter;
  isAuthenticated: boolean;
  setState: SetStateType<S>;
  pureSetState: SetPureStateType<S>;
  dispatch: ReturnType<typeof useAppDispatch>;
}

export interface IBaseHelperParams {}

export interface IBaseHelperReturnType {}

export interface IBaseComponentParams<
  P extends IBaseVoidProps = {},
  S extends IBaseState = {},
  H = any,
> {
  props?: P;
  initialState?: S;
  helperHook?(helperParams: ICommonHelperParams<P, S>): H;
}

export interface IBaseComponentReturnType<S extends IBaseState, H> {
  state: S;
  helper: H;
  currency: string;
  router: NextRouter;
  isAuthenticated: boolean;
  setState: SetStateType<S>;
  pureSetState: SetPureStateType<S>;
  dispatch: ReturnType<typeof useAppDispatch>;
}

export interface ICheckAuthenticationAfterLoginParams {
  isLogin?: boolean;
  isNew?: boolean;
}
