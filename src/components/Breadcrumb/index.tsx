import { FC } from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import { StyledBreadcrumb } from './styled';

interface Props {
  items: { label: string; url: string }[];
}

const Breadcrumb: FC<Props> = ({ items, ...args }) => {
  return (
    <StyledBreadcrumb {...args}>
      {items.map((item, index) => (
        <BreadcrumbItem {...item} key={index} />
      ))}
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
