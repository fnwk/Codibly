import { configureStore, combineReducers } from "@reduxjs/toolkit";

import pageSlice from "./slices/pageSlice";
import idSlice from "./slices/idSlice";
import modalSlice from "./slices/modalSlice";

const reducer = combineReducers({
  page: pageSlice,
  id: idSlice,
  modal: modalSlice,
});

const store = configureStore({
  reducer,
});

export default store;
