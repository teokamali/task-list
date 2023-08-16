import { useBaseComponent } from '@base/BaseComponent';
import { useTheme } from 'next-themes';
import { useThemeSwitcherHelper } from './ThemeSwitcherHelper';
import {
  StyledThemeSwitcherButton,
  StyledThemeSwitcherToggleWrapper,
  StyledThemeSwitcherWrapper,
} from './ThemeSwitcherStyle';
import { IThemeSwitcherProps, IThemeSwitcherState } from './ThemeSwitcherType';

export const ThemeSwitcher = (props: IThemeSwitcherProps) => {
  const { helper } = useBaseComponent<
    IThemeSwitcherProps,
    IThemeSwitcherState,
    ReturnType<typeof useThemeSwitcherHelper>
  >({
    props,
    helperHook: useThemeSwitcherHelper,
  });
  const { themeToggleHandler } = helper;
  const { theme } = useTheme();

  return (
    <>
      <StyledThemeSwitcherWrapper>
        <span>DARK</span>
        <StyledThemeSwitcherToggleWrapper
          onClick={() => {
            themeToggleHandler(theme === 'dark' ? false : true);
          }}
        >
          <StyledThemeSwitcherButton isLight={theme === 'light'} />
        </StyledThemeSwitcherToggleWrapper>
        <span>LIGHT</span>
      </StyledThemeSwitcherWrapper>
    </>
  );
};
