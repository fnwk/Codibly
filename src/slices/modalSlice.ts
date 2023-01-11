import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false,
    selectedName: "",
    selectedId: 0,
    selectedPantoneValue: "",
    selectedYear: 0,
    selectedColor: "",
  },
  reducers: {
    changeModalState: (state) => {
      state.showModal = !state.showModal;
    },
    selectProduct: (state, action) => {
      state.selectedId = action.payload.id;
      state.selectedName = action.payload.name;
      state.selectedPantoneValue = action.payload.pantone_value;
      state.selectedYear = action.payload.year;
      state.selectedColor = action.payload.color;
    },
  },
});

export const { changeModalState, selectProduct } = modalSlice.actions;
export default modalSlice.reducer;
