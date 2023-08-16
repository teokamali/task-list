import { useBaseComponent } from '@base/BaseComponent';
import { ThemeSwitcher } from '@components/Shared/ThemeSwitcher/ThemeSwitcher';
import { useHomeHeader } from './HomeHeaderHelper';
import { StyledHomeHeaderWrapper } from './HomeHeaderStyle';
import { IHomeHeaderProps, IHomeHeaderState } from './HomeHeaderType';

export const HomeHeader = (props: IHomeHeaderProps) => {
  const { helper } = useBaseComponent<
    IHomeHeaderProps,
    IHomeHeaderState,
    ReturnType<typeof useHomeHeader>
  >({
    props,
    helperHook: useHomeHeader,
  });

  const { logoutHandler } = helper;

  return (
    <StyledHomeHeaderWrapper>
      <ThemeSwitcher />
      <button
        className="bg-violet-500 rounded px-2 py-1 text-white font-semibold"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </StyledHomeHeaderWrapper>
  );
};
