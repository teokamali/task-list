import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledColumnWrapper = styled.div`
  ${tw`w-full max-w-[340px] p-5 rounded-[10px]`}
`;
export const StyledColumnHeader = styled.header`
  ${tw`w-full flex items-center justify-between mb-5`}
`;
export const StyledColumnHeaderTitle = styled.h3`
  ${tw`text-[15px] font-semibold`}
`;
export const StyledColumnHeaderCounter = styled.span`
  ${tw`text-[12px] font-medium`}
`;

export const StyledDroppableWrapper = styled.div<{ isDraggingOver: boolean }>`
  ${tw`min-h-[700px] w-full flex flex-col gap-3`}
`;
export const StyledAddTaskButton = styled.button`
  ${tw`w-fit text-[13px] font-semibold`}
`;
