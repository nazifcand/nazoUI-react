import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  label: string | number;
  color?:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'grey'
    | 'dark';
  rounded?: boolean;
  outline?: boolean;
}

interface StyledProps {
  color:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'grey'
    | 'dark';
  rounded?: boolean;
  outline?: boolean;
}

const StyledTag = styled.span<StyledProps>`
  padding: 0.25rem 0.75rem;
  font-size: ${({ theme }) => theme.sizes.xsmall};
  box-sizing: border-box;
  border: 1px solid rgb(${({ theme, color }) => theme.colors[color]});
  background-color: rgb(${({ theme, color }) => theme.colors[color]});

  color: rgb(
    ${({ color, theme }) =>
      color != 'grey' ? '255,255,255' : theme.colors.color}
  );

  ${({ rounded }) => rounded && `border-radius:.25rem;`}

  ${({ theme, color, outline }) =>
    outline &&
    `background-color: rgba(${theme.colors[color]},.1);
     color: rgb(${theme.colors[color]});
  `}
`;

const Tag: FC<Props> = ({
  label,
  color = 'primary',
  rounded = false,
  outline = false,
  ...args
}) => {
  return (
    <StyledTag color={color} rounded={rounded} outline={outline} {...args}>
      {label}
    </StyledTag>
  );
};

export default Tag;
