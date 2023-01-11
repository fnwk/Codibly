import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    page: 1,
    totalPages: 0,
    prodPerPage: 6,
  },
  reducers: {
    nextPage: (state) => {
      ++state.page;
    },
    prevPage: (state) => {
      --state.page;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setProdPerPage: (state, action: PayloadAction<number>) => {
      state.prodPerPage = action.payload;
    },
  },
});

export const { nextPage, prevPage, setTotalPages, setProdPerPage } =
  pageSlice.actions;
export default pageSlice.reducer;
