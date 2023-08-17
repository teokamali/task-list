import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledCheckBoxLabel = styled.label`
  ${tw`border relative  w-4 h-4 p-0`}
`;
export const StyledCheckBoxInput = styled.input`
  ${tw`opacity-0 absolute inset-0 w-full h-full`}
`;
export const StyledSvgWrapper = styled.div`
  ${tw`w-full h-full flex items-center justify-center text-center`}
`;
export const StyledSvg = styled.svg<{ show: boolean }>`
  ${tw`w-[10px] h-[7px]  transition duration-200`}
  ${({ show }) => (show ? tw`opacity-100` : tw`opacity-0`)}
`;
