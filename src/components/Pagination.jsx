import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          a {
            color: white;
            text-decoration: none;
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages || 1}
        onPageChange={pageChange}
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        containerClassName="pagination justify-content-center my-4 gap-4"
      />
    </>
  );
};

export default Pagination;
