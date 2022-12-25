import { HTMLAttributes, ReactNode, FC } from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';

interface Props extends HTMLAttributes<HTMLDivElement> {
  list: { image?: string; label: string }[];
  rounded?: boolean;
  circle?: boolean;
  max?: number;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
}

interface StyledProps {
  size: 'xsmall' | 'small' | 'medium' | 'large';
}

const StyledAvatarStack = styled.div<StyledProps>`
  display: flex;

  & > div {
    font-size: calc(${({ theme, size }) => theme.sizes[size]} / 2);

    & + div {
      margin-left: -${({ theme, size }) => theme.sizes[size]};
    }

    &:hover {
      z-index: 10;
      transform: translateY(
        calc(-${({ theme, size }) => theme.sizes[size]} / 3)
      );
    }
  }
`;

const AvatarStack: FC<Props> = ({
  list,
  max,
  size = 'medium',
  rounded = false,
  circle = true,
}) => {
  return (
    <StyledAvatarStack size={size}>
      {list.slice(0, max).map((item, index) => (
        <Avatar
          key={index}
          image={item.image}
          label={item.label}
          size={size}
          rounded={rounded}
          circle={circle}
        />
      ))}

      {max && list.length - max > 0 && (
        <Avatar
          label={`+${list.length - max}`}
          size={size}
          rounded={rounded}
          circle={circle}
        />
      )}
    </StyledAvatarStack>
  );
};

export default AvatarStack;
