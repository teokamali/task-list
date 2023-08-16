import { useTheme } from 'next-themes';
export const useThemeSwitcherHelper = () => {
  const { setTheme } = useTheme();

  const themeToggleHandler = (isChecked: boolean) => {
    if (!isChecked) {
      return setTheme('light');
    }
    setTheme('dark');
  };
  return {
    themeToggleHandler,
  };
};
