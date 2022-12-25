import { FC, ReactNode } from 'react';
import { StyledAlert } from './styled';

interface Props {
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

const Alert: FC<Props> = ({ children, color = 'primary' }) => {
  return <StyledAlert color={color}>{children}</StyledAlert>;
};

export default Alert;
