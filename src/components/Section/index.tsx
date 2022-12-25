import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';

interface Props {
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  actions?: ReactNode;
  title: string;
  subTitle?: string;
}

const StyledSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 2rem;
  }
`;

const SectionContent = styled.div``;

const Section: FC<Props> = ({ children, title, subTitle, actions }) => {
  return (
    <StyledSection>
      <SectionHeader title={title} subTitle={subTitle} actions={actions} />
      <SectionContent>{children}</SectionContent>
    </StyledSection>
  );
};

export default Section;
