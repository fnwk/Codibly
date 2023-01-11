import styled from "styled-components";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setTotalPages } from "../slices/pageSlice";

import Page from "../models/page";

import Product from "./Product";
import ProductInterface from "../models/product";

const ProductList = () => {
  const dispatch = useDispatch();

  const [productList, setProductList] = useState<ProductInterface[]>([]);

  const { id } = useSelector((state: { id: { id: number } }) => state.id);
  const currentPage = useSelector((state: { page: Page }) => state.page.page);
  const prodPerPage = useSelector(
    (state: { page: Page }) => state.page.prodPerPage
  );

  const getProduct = async () => {
    const res = await fetch(
      `https://reqres.in/api/products?page=${currentPage}&per_page=${prodPerPage}${
        id !== 0 ? "&id=" + id : ""
      }`
    );
    const data = await res.json();

    if (id === 0) {
      setProductList(data.data);
    } else if (Object.keys(data).length !== 0) {
      setProductList([data.data]);
    } else {
      setProductList([]);
    }

    console.log(data.total_pages);
    dispatch(setTotalPages(data.total_pages));
  };

  useEffect(() => {
    getProduct();
  }, [prodPerPage, id, currentPage]);

  return (
    <ProductListStyled>
      <tr>
        <th>Name: </th>
        <th>Year: </th>
        <th className="id">id: </th>
      </tr>
      {productList.map((product) => (
        <Product
          name={product.name}
          year={product.year}
          color={product.color}
          pantone_value={product.pantone_value}
          id={product.id}
          key={product.id}
        />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;

const ProductListStyled = styled.table`
  border-collapse: separate;
  border-spacing: 0 10px;
  width: 100%;

  tr {
    display: flex;
    align-items: center;
    padding: 0 5%;
  }

  th {
    width: 30%;
    font-size: 16px;
    text-align: left;

    &.id {
      width: auto;
      margin-left: auto;
    }
  }
`;
