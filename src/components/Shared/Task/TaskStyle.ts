import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledCheckBoxInput = styled.input`
  ${tw`w-4 h-4 bg-white`}
`;

export const StyledNameInput = styled.input`
  ${tw`w-fit text-[12px] bg-transparent font-semibold border-0 outline-0 cursor-default focus:(cursor-text)`}
`;

export const StyledRemoveButton = styled.button`
  ${tw`absolute right-3 top-[50%] translate-y-[-50%] p-1.5 w-3 h-3 text-[16px] text-red-2 font-medium leading-[0] text-center transition opacity-0 `}
`;

export const StyledTaskWrapper = styled.div<{ isDragging: boolean }>`
  ${tw`relative px-2.5 py-3 w-full flex items-center justify-start gap-2.5 bg-white text-gray-1 border border-red-3 rounded`}
  ${({ isDragging }) => (isDragging ? tw`bg-yellow-1` : tw`bg-white`)}

  &:hover ${StyledRemoveButton} {
    opacity: 1;
  }
`;
