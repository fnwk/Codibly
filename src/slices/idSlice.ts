import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const idSlice = createSlice({
  name: "id",
  initialState: { id: 0 },
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = idSlice.actions;
export default idSlice.reducer;
