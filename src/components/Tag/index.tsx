import { FC, HTMLAttributes } from 'react';
import { StyledTag } from './styled';

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
