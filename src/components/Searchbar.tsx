import { useState } from "react";

import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setId } from "../slices/idSlice";

const Searchbar = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState<number | string>("");

  const setIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value)) {
      setTextInput(parseInt(e.target.value));
      dispatch(setId(parseInt(e.target.value)));
    } else if (e.target.value === "") {
      setTextInput("");
      dispatch(setId(0));
    }
  };

  return (
    <SearchbarStyled
      placeholder="Search by id"
      type="number"
      value={textInput}
      onChange={setIdHandler}
    />
  );
};

export default Searchbar;

const SearchbarStyled = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  width: 200px;
  background-color: transparent;
  padding: 7px 10px;
  font-size: 15px;
  outline: none;
`;
