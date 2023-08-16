import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledTaskWrapper = styled.div<{ isDragging: boolean }>`
  ${tw`relative w-full flex items-center justify-start gap-2.5 bg-white border border-red-3`}
`;
export const StyledCheckBoxInput = styled.input`
  ${tw`w-4 h-4`}
`;
export const StyledNameInput = styled.input`
  ${tw` w-full bg-green-1 border-0 outline-0 focus:outline-1`}
`;
export const StyledRemoveButton = styled.button`
  ${tw`absolute right-1 top-[50%] translate-y-[-50%] p-1.5 w-3 h-3 text-center`}
`;
