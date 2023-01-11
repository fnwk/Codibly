import styled from "styled-components";
import Modal from "../models/modal";
import closeIcon from "../assets/close.svg";
import { changeModalState } from "../slices/modalSlice";
import { useSelector, useDispatch } from "react-redux";

const ColorModal = () => {
  const dispatch = useDispatch();
  const {
    selectedColor,
    selectedId,
    selectedName,
    selectedYear,
    selectedPantoneValue,
  } = useSelector((state: { modal: Modal }) => state.modal);

  const closeModal = () => {
    dispatch(changeModalState());
  };

  console.log(selectedColor);

  return (
    <ColorModalStyled color={selectedColor}>
      <img src={closeIcon} className="close-icon" onClick={closeModal} />
      <h1>{selectedName}</h1>
      <div className="color-containter">
        <h1>{selectedPantoneValue}</h1>
      </div>
      <div className="aditional-info">
        <h2>{selectedYear}</h2>
        <h2>{selectedId}</h2>
      </div>
    </ColorModalStyled>
  );
};

export default ColorModal;

const ColorModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vmax;
  height: 30vmax;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 250px rgba(0, 0, 0, 0.39);
  background: white;
  border-radius: 15px;
  z-index: 1000;

  h1 {
    width: 100%;
    text-align: center;
    font-weight: 700;
  }

  h2 {
    font-weight: 500;
  }

  .close-icon {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 24px;
    cursor: pointer;
  }

  .color-containter {
    display: flex;
    align-items: center;
    width: 75%;
    border-radius: 6px;
    background-color: ${(props) => props.color};
  }

  .aditional-info {
    display: flex;
    width: 75%;
    justify-content: space-between;
  }
`;
