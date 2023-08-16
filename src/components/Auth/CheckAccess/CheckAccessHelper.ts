import { ICommonHelperParams } from '@base/BaseInterface';
import { useEffect } from 'react';

export const useCheckAccessHelper = (params: ICommonHelperParams) => {
  const { isAuthenticated, router } = params;

  const navigateToLoginHandler = async () => {
    if (!isAuthenticated) await router.push(`/login?return=${router.pathname}`);
  };

  useEffect(() => {
    navigateToLoginHandler();
  }, [isAuthenticated]);
};
