import { useDispatch, useSelector } from "react-redux";

import { nextPage, prevPage } from "../slices/pageSlice";

import Page from "../models/page";
import styled from "styled-components";

const Pagination = () => {
  const dispatch = useDispatch();

  const totalPages = useSelector(
    (state: { page: Page }) => state.page.totalPages
  );
  const page = useSelector((state: { page: Page }) => state.page.page);

  return (
    <PaginationStyled>
      {page > 1 && (
        <button onClick={() => dispatch(prevPage())}>
          <img src="https://img.icons8.com/ios/50/000000/circled-chevron-left.png" />
        </button>
      )}

      {page < totalPages && (
        <button onClick={() => dispatch(nextPage())}>
          <img src="https://img.icons8.com/ios/50/000000/circled-chevron-right.png" />
        </button>
      )}
    </PaginationStyled>
  );
};

export default Pagination;

const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  width: 20vmin;
  justify-content: space-around;
  margin: auto;

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
`;
