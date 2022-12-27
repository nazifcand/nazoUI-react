import styled from 'styled-components';

interface StyledProps {
  active: boolean;
  control: boolean;
}

export const StyledPage = styled.div<StyledProps>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.sizes.xsmall};
  border: 2px solid rgb(${({ theme }) => theme.colors.grey});
  color: rgb(${({ theme }) => theme.colors.primary});
  border-radius: 0.35rem;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: rgba(${({ theme }) => theme.colors.grey}, 0.5);
  }

  ${({ theme, active }) =>
    active &&
    `
  border-color: rgb(${theme.colors.primary});
  `}

  ${({ theme, control }) =>
    control &&
    `
  border-color: rgb(${theme.colors.primary});
  background-color: rgb(${theme.colors.primary}) !important;
  color: #fff;
  opacity:.75;

  &:hover{
  opacity:1;
  }
  `}
`;
