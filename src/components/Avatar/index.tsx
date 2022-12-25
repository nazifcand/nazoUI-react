import { FC, HTMLAttributes } from 'react';
import { StyledAvatar } from './styled';

interface Props extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  label: string;
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
  circle?: boolean;
}

const Avatar: FC<Props> = ({
  image,
  label,
  size = 'medium',
  color = 'grey',
  circle = false,
  rounded = false,
  ...args
}) => {
  return (
    <StyledAvatar
      size={size}
      color={color}
      circle={circle}
      rounded={rounded}
      {...args}
    >
      {image ? <img src={image} alt={label} /> : <span>{label}</span>}
    </StyledAvatar>
  );
};

export default Avatar;
