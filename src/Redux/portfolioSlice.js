import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: true,
  BoscoApp: false,
  PokeApi: false
};

//! creo que no es necesario un estado local para provinces, cities y servicios. tema para resolver luego - ari

const portfolioSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    changeDivSkills (state, action) {
      state.skills = action
      state.BoscoApp = false
      state.PokeApi = false
    },
    changeDivBoscoApp (state, action) {
      state.BoscoApp = action
      state.skills = false
      state.PokeApi = false
    },
    changeDivPokeApi (state, action) {
      state.PokeApi = action
      state.skills = false
      state.BoscoApp = false
    }
  },
});

export const { changeDivSkills, changeDivBoscoApp, changeDivPokeApi } = portfolioSlice.actions;

export default portfolioSlice.reducer;
