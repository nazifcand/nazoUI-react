import { FC, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  active?: string | number;
  content: ReactNode | string;
}

const StyledAccordionItem = styled.div``;

const AccordionItemHeader = styled.div<{
  value: string | number;
  active?: string | number;
}>`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  border-bottom: 1px solid rgb(${({ theme }) => theme.colors.grey});

  h4 {
    font-weight: bold;
    font-size: ${({ theme }) => theme.heading.h4};
  }

  svg {
    transition: ${({ theme }) => theme.transitionDelay} transform ease;
  }

  ${({ active, value }) =>
    active == value &&
    `
  &{
    svg{
      transform:rotate(180deg)
    }
  }`}
`;

const AccordionItemContent = styled.div`
  margin: 1rem 0;
`;

const AccordionItem: FC<Props> = ({
  title,
  value,
  active,
  content,
  ...args
}) => {
  return (
    <StyledAccordionItem {...args}>
      <AccordionItemHeader active={active} value={value}>
        <h4>{title}</h4>
        <FaChevronDown />
      </AccordionItemHeader>

      {active == value && (
        <AccordionItemContent>{content}</AccordionItemContent>
      )}
    </StyledAccordionItem>
  );
};

export default AccordionItem;
