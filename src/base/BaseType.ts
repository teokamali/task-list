import { Dispatch, SetStateAction } from 'react';
import { IBaseState } from './BaseInterface';

export type SetStateType<S extends IBaseState> = (newState: Partial<S>) => void;
export type SetPureStateType<S extends IBaseState> = Dispatch<
  SetStateAction<S>
>;
