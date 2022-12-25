import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  outline?: boolean;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  color?:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'grey'
    | 'dark';
  rounded?: boolean;
}

interface StyledProps {
  outline?: boolean;
  color:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'grey'
    | 'dark';
  rounded: boolean;
}

const StyledBadge = styled.span<StyledProps>`
  padding: 0.25rem 0.5rem;
  border: 1px solid rgb(${({ theme, color }) => theme.colors[color]});
  background-color: rgb(${({ theme, color }) => theme.colors[color]});
  font-size: ${({ theme }) => theme.sizes.xsmall};
  box-sizing: border-box;
  color: rgb(
    ${({ color, theme }) =>
      color != 'grey' ? '255,255,255' : theme.colors.color}
  );

  ${({ rounded }) => rounded && `border-radius:.5rem;`}

  ${({ theme, color, outline }) =>
    outline &&
    `background-color: rgba(${theme.colors[color]},.1);
     color: rgb(${theme.colors[color]});
  `}
`;

const Badge: FC<Props> = ({
  label,
  outline = false,
  rounded = false,
  color = 'primary',
  ...props
}) => {
  return (
    <StyledBadge color={color} outline={outline} rounded={rounded} {...props}>
      {label}
    </StyledBadge>
  );
};

export default Badge;
