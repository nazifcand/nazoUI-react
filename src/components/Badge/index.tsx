import { FC, HTMLAttributes } from 'react';
import { StyledBadge } from './styled';

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
