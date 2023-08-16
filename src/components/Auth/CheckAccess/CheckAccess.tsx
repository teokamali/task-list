import { useBaseComponent } from '@base/BaseComponent';
import { useCheckAccessHelper } from './CheckAccessHelper';
import { CheckAccessProps, CheckAccessState } from './CheckAccessType';

export const CheckAccess = (props: CheckAccessProps) => {
  const { isAuthenticated } = useBaseComponent<
    CheckAccessProps,
    CheckAccessState,
    ReturnType<typeof useCheckAccessHelper>
  >({ props, helperHook: useCheckAccessHelper });

  const { children } = props;

  return <>{isAuthenticated && <>{children}</>}</>;
};
