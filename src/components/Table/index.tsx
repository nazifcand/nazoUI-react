import { FC, HTMLAttributes, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';

interface ColumnItem {
  title: string;
  flex?: number;
  selector: (row: any) => any;
}

interface Props extends HTMLAttributes<HTMLTableElement> {
  columns: ColumnItem[];
  data: any[];
  defaultPage?: number;
  perPage?: number;
  pagination?: boolean;
}

const StyledTable = styled.div``;

const TableHead = styled.div``;

const TableBody = styled.div``;

const Row = styled.div`
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

const TableCell = styled.div<{ flex?: number }>`
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

const TableTitle = styled(TableCell)`
  background-color: tomato;
  color: #fff;
  white-space: nowrap;
  font-weight: 500;
`;

const Table: FC<Props> = ({
  data,
  columns,
  pagination = false,
  perPage = 10,
  defaultPage = 1,
  ...args
}) => {
  const [page, setPage] = useState(defaultPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;

  let filteredData = data;

  // with pagination
  if (pagination) {
    filteredData = data.slice(start, end);
  }

  return (
    <>
      <StyledTable {...args}>
        <TableHead>
          <Row>
            {columns.map((column, index) => (
              <TableTitle flex={column.flex} key={index}>
                {column.title}
              </TableTitle>
            ))}
          </Row>
        </TableHead>

        <TableBody>
          {filteredData.map((row, index) => (
            <Row key={index} className="table-row">
              {columns.map((column, colIndex) => (
                <TableCell flex={column.flex} key={colIndex}>
                  {column.selector(row)}
                </TableCell>
              ))}
            </Row>
          ))}
        </TableBody>
      </StyledTable>

      {pagination && (
        <Pagination
          total={data.length}
          page={page}
          pageSize={perPage}
          onChange={(page) => setPage(page)}
        />
      )}
    </>
  );
};

export default Table;
