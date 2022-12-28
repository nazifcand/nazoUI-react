import { FC, HTMLAttributes } from 'react';
import { StyledPagination } from './styled';
import Page from './Page';
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';

interface Props {
  total: number;
  page: number;
  pageSize: number;
  onChange: (page: number) => void;
}

const Pagination: FC<Props> = ({
  total,
  page = 1,
  pageSize = 10,
  onChange,
  ...args
}) => {
  const pages = [...Array(Math.ceil(total / pageSize)).keys()].map((i) => ++i);

  return (
    <StyledPagination {...args}>
      {page > 1 && (
        <>
          <Page page={1} onClick={() => onChange(1)} control={true}>
            <FaAngleDoubleLeft />
          </Page>

          <Page
            page={page - 1}
            onClick={() => onChange(page - 1)}
            control={true}
          >
            <FaAngleLeft />
          </Page>
        </>
      )}

      {pages.map(
        (item) =>
          item >= page - 3 &&
          item <= page + 3 && (
            <Page
              key={item}
              page={item}
              active={item == page}
              onClick={() => onChange(item)}
            >
              {item}
            </Page>
          )
      )}

      {page < pages[pages.length - 1] && (
        <>
          <Page
            page={page + 1}
            onClick={() => onChange(page + 1)}
            control={true}
          >
            <FaAngleRight />
          </Page>

          <Page
            page={pages[pages.length - 1]}
            onClick={() => onChange(pages[pages.length - 1])}
            control={true}
          >
            <FaAngleDoubleRight />
          </Page>
        </>
      )}
    </StyledPagination>
  );
};

export default Pagination;
