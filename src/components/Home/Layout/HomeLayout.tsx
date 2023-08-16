import { useBaseComponent } from '@base/BaseComponent';
import { StyledHomeLayout } from './HomeLayoutStyle';
import { IHomeLayoutProps } from './HomeLayoutType';

export const HomeLayout = (props: IHomeLayoutProps) => {
  useBaseComponent();
  const { children } = props;
  return <StyledHomeLayout>{children}</StyledHomeLayout>;
};
