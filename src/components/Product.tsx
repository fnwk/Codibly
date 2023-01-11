import styled from "styled-components";
import ProductInterface from "../models/product";

import { useDispatch } from "react-redux";
import { selectProduct, changeModalState } from "../slices/modalSlice";

const Product = (props: ProductInterface) => {
  const dispatch = useDispatch();

  const selectProductHandler = () => {
    dispatch(selectProduct(props));
    dispatch(changeModalState());
  };

  return (
    <ProductStyled
      color={props.color}
      className="info"
      onClick={selectProductHandler}
    >
      <td>{props.name}</td>
      <td>{props.year}</td>
      <td className="id">{props.id}</td>
    </ProductStyled>
  );
};

export default Product;

const ProductStyled = styled.tr`
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 5%;
  margin-block: 15px;
  border-radius: 10px;
  border-collapse: collapse;
  background-color: ${(props) => props.color};
  box-shadow: 0px 0px 15px ${(props) => props.color};
  cursor: pointer;

  td {
    width: 30%;

    &.id {
      width: auto;
      margin-left: auto;
    }
  }
`;
