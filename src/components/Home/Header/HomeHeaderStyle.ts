import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHomeHeaderWrapper = styled.div`
  ${tw`z-10 w-full items-center justify-between font-mono p-5 text-sm lg:(flex justify-between items-center)`}
`;
export const StyledHomeHeaderTextWrapper = styled.div`
  ${tw`fixed left-0 top-0 flex gap-3 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30`}
`;
export const StyledHomeHeaderCode = styled.code`
  ${tw`font-mono font-bold`}
`;
export const StyledHomeHeaderLogoWrapper = styled.div`
  ${tw`fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none`}
`;
export const StyledHomeHeaderLogoLink = styled(Link)`
  ${tw`pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0`}
`;
