import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledColumnWrapper = styled.div`
  ${tw`w-full bg-red-1 min-h-[700px] max-w-[340px] p-5 rounded-[10px]`}
`;
export const StyledColumnHeader = styled.header`
  ${tw`w-full flex items-center justify-between`}
`;
export const StyledColumnHeaderTitle = styled.h3`
  ${tw``}
`;
export const StyledColumnHeaderCounter = styled.span`
  ${tw``}
`;

export const StyledDroppableWrapper = styled.div<{ isDraggingOver: boolean }>`
  ${tw`flex flex-col gap-3`}
`;
