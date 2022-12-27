import { FC, HTMLAttributes, ReactNode } from 'react';
import { StyledPage } from './styled';

interface Props extends HTMLAttributes<HTMLDivElement> {
  page: number;
  active?: boolean;
  control?: boolean;
  children?: ReactNode;
}

const Page: FC<Props> = ({
  page,
  children,
  active = false,
  control = false,
  ...args
}) => {
  return (
    <StyledPage control={control} active={active} {...args}>
      {children || page}
    </StyledPage>
  );
};

export default Page;
