import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const StyledTable = styled.div``;

export const TableHead = styled.div``;

export const TableBody = styled.div``;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const TableFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  align-items: stretch;
  cursor: pointer;

  & + & {
    border-top: 1px solid rgb(${({ theme }) => theme.colors.grey});
  }

  &:nth-child(2n + 2) {
    background-color: rgba(${({ theme }) => theme.colors.grey}, 0.25);
  }

  &:hover {
    background-color: rgb(${({ theme }) => theme.colors.grey});
  }
`;

export const TableCell = styled.div<{ flex?: number }>`
  flex: ${({ flex }) => (flex ? flex : 1)};
  padding: 0 0.5rem;
  vertical-align: middle;
  box-sizing: border-box;
  min-width: 100px;
  height: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.sizes.xsmall};
`;

export const TableTitle = styled(TableCell)`
  background-color: tomato;
  color: #fff;
  white-space: nowrap;
  font-weight: 500;
`;
