import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pathReaction: true,
};

export const forPath = createSlice({
  name: "forPath",
  initialState,
  reducers: {
    ForPath: (state,{payload}) => {
      state.pathReaction = payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { ForPath } = forPath.actions;

export default forPath.reducer;
