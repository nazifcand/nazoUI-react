import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import { StyledAccordion } from './styled';
import AccordionItem from './AccordionItem';

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: {
    title: string;
    value: string | number;
    content: ReactNode | string;
  }[];
  active?: string | number;
}

const Accordion: FC<Props> = ({ items, active, ...args }) => {
  const [activeItem, setActiveItem] = useState(
    active ? active : items[0]?.value
  );

  const handleClick = (value: string | number): void => {
    if (activeItem == value) return setActiveItem('');

    setActiveItem(value);
  };

  return (
    <StyledAccordion {...args}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          active={activeItem}
          onClick={() => handleClick(item.value)}
        />
      ))}
    </StyledAccordion>
  );
};

export default Accordion;
