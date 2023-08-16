import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHomeBodyImageWrapper = styled.div`
  ${tw`relative min-h-[calc(100vh - 54px)] flex justify-center items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-600 after:via-blue-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]`}
`;
export const StyledHomeBodyCardsWrapper = styled.div`
  ${tw`mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left`}
`;
export const StyledCardWrapper = styled(Link)`
  ${tw`rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
`;
export const StyledCardTitle = styled.h2`
  ${tw`mb-3 text-2xl font-semibold`}
`;
export const StyledCardSpan = styled.span`
  ${tw`inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}
`;
export const StyledCardParagraph = styled.p`
  ${tw`m-0 max-w-[30ch] text-sm opacity-50`}
`;
