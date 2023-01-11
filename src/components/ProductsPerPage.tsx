import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setProdPerPage } from "../slices/pageSlice";

const ProductsPerPage = () => {
  const dispatch = useDispatch();

  const setProdPerPageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setProdPerPage(parseInt(e.target.value)));
  };

  return (
    <ProductsPerPageStyled defaultValue={6} onChange={setProdPerPageHandler}>
      <option value={1}>1 color</option>
      <option value={2}>2 colors</option>
      <option value={3}>3 colors</option>
      <option value={4}>4 colors</option>
      <option value={5}>5 colors</option>
      <option value={6}>6 colors</option>
      <option value={7}>7 colors</option>
      <option value={8}>8 colors</option>
      <option value={9}>9 colors</option>
      <option value={10}>10 colors</option>
      <option value={11}>11 colors</option>
      <option value={12}>12 colors</option>
      <option value={13}>13 colors</option>
      <option value={14}>14 colors</option>
      <option value={15}>15 colors</option>
      <option value={16}>16 colors</option>
      <option value={17}>17 colors</option>
      <option value={18}>18 colors</option>
      <option value={19}>19 colors</option>
      <option value={20}>20 colors</option>
    </ProductsPerPageStyled>
  );
};

export default ProductsPerPage;

const ProductsPerPageStyled = styled.select`
  border: 1px solid black;
  border-radius: 10px;
  font-size: 15px;
  background-color: transparent;
  padding: 7px 10px;
`;
