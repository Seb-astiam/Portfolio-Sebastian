import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: false,
};

//! creo que no es necesario un estado local para provinces, cities y servicios. tema para resolver luego - ari

const portfolioSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    changeDivSkills (state, action) {
      state.skills = action
    }
  },
});

export const { changeDivSkills } = portfolioSlice.actions;

export default portfolioSlice.reducer;
