import styled from 'styled-components';

export const StyledBreadcrumbItem = styled.a`
  color: rgba(${({ theme }) => theme.colors.color}, 0.75);
  text-decoration: none;
  font-size: ${({ theme }) => theme.sizes.xsmall};

  &:last-child {
    color: rgb(${({ theme }) => theme.colors.color});
    font-weight: bold;
  }

  &:hover {
    color: rgb(${({ theme }) => theme.colors.primary});
    text-decoration: underline;
  }

  & + &:before {
    content: '›';
    margin: 0 1rem;
    color: rgba(${({ theme }) => theme.colors.color}, 0.75);
    font-weight: normal;
    text-decoration: none;
  }
`;
