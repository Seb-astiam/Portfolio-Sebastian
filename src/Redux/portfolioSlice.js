import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: false,
};

//! creo que no es necesario un estado local para provinces, cities y servicios. tema para resolver luego - ari

const portfolioSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    
  },
});

export const { } = portfolioSlice.actions;

export default portfolioSlice.reducer;
