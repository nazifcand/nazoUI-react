import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  subTitle?: string;
  actions?: ReactNode;
  onClick: () => void;
}

const StyledSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  min-height: 50px;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(${({ theme }) => theme.colors.grey}, 0.5);
  box-sizing: border-box;
`;

const StyledSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  cursor: pointer;

  h3 {
    font-weight: bold;
    font-size: ${({ theme }) => theme.heading.h3};
  }

  p {
    font-size: ${({ theme }) => theme.sizes.xsmall};
    color: rgba(${({ theme }) => theme.colors.color}, 0.75);
  }
`;

const StyledSectionActions = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const SectionHeader: FC<Props> = ({ title, subTitle, actions, onClick }) => {
  return (
    <StyledSectionHeader className="section-header">
      <StyledSectionTitle onClick={() => onClick()}>
        <h3>{title}</h3>
        {subTitle && <p>{subTitle}</p>}
      </StyledSectionTitle>

      {actions && <StyledSectionActions>{actions}</StyledSectionActions>}
    </StyledSectionHeader>
  );
};

export default SectionHeader;
