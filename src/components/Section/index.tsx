import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';

interface Props {
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  actions?: ReactNode;
  title: string;
  subTitle?: string;
  closed?: boolean;
}

const StyledSection = styled.div<{ closed: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 2rem;
  }

  ${({ closed }) =>
    closed &&
    `
    max-height:50px;
    overflow:hidden;

    .section-header{
      border:none;
      margin:0;
    }
  `}
`;

const SectionContent = styled.div``;

const Section: FC<Props> = ({
  children,
  title,
  subTitle,
  actions,
  closed = false,
}) => {
  const [state, setState] = useState(closed);

  return (
    <StyledSection closed={state}>
      <SectionHeader
        title={title}
        subTitle={subTitle}
        actions={actions}
        onClick={() => setState(!state)}
      />
      <SectionContent>{children}</SectionContent>
    </StyledSection>
  );
};

export default Section;
