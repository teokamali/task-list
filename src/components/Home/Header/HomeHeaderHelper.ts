import { ICommonHelperParams } from '@base/BaseInterface';
import { logoutUser } from '@redux/slices/authentication/AuthenticationSlice';

export const useHomeHeader = (params: ICommonHelperParams) => {
  const { dispatch } = params;

  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return {
    logoutHandler,
  };
};
