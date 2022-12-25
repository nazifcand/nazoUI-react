import { FC, HTMLAttributes, ReactNode } from 'react';
import { StyledAlert } from './styled';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  color?:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'grey'
    | 'dark';
}

const Alert: FC<Props> = ({ children, color = 'primary', ...args }) => {
  return (
    <StyledAlert color={color} {...args}>
      {children}
    </StyledAlert>
  );
};

export default Alert;
