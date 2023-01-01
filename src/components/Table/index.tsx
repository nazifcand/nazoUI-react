import { FC, HTMLAttributes, MouseEvent, useMemo, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
import {
  Row,
  StyledTable,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableTitle,
  TableWrapper,
} from './styled';

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
  pageChange?: (page: number) => void;
}

const Table: FC<Props> = ({
  data,
  columns,
  pagination = false,
  perPage = 10,
  defaultPage = 1,
  pageChange,
  ...args
}) => {
  const [page, setPage] = useState(defaultPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;

  let filteredData = useMemo(
    () =>
      data.filter((item) => {
        console.log('x');
        return item;
      }),
    []
  );

  // with pagination
  if (pagination) {
    filteredData = data.slice(start, end);
  }

  const handlePageChange = (page: number) => {
    setPage(page);
    pageChange && pageChange(page);
  };

  return (
    <TableWrapper>
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
        <TableFooter>
          <Pagination
            total={data.length}
            page={page}
            pageSize={perPage}
            onChange={handlePageChange}
          />
          <div>
            <strong>{start + 1}</strong> - <strong>{end}</strong> of{' '}
            <strong>{data.length}</strong>
          </div>
        </TableFooter>
      )}
    </TableWrapper>
  );
};

export default Table;
