import { FC, HTMLAttributes } from 'react';
import { StyledBreadcrumbItem } from './styled';

interface Props extends HTMLAttributes<HTMLElement> {
  url: string;
  label: string;
}

const BreadcrumbItem: FC<Props> = ({ label, url, ...props }) => {
  return (
    <StyledBreadcrumbItem href={url} target="_blank" {...props}>
      <span>{label}</span>
    </StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;
