import Image from 'next/image';
import { StyledHomeBodyImageWrapper } from './HomeBodyStyle';
import { IHomeBodyType } from './HomeBodyType';

export const HomeBody = (props: IHomeBodyType) => {
  return (
    <StyledHomeBodyImageWrapper>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </StyledHomeBodyImageWrapper>
  );
};
