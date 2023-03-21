import { FeatureState } from "@/Interface/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FeatureState = {
  openModal: false,
  isMenu: false,
  navigation: {
  mainPage: "",
  subPage: "",
  },
  isAnimating: false,
  };
  
  const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
  updateModal: (state, action: PayloadAction<boolean>) => {
  state.openModal = action.payload;
  },
  updateMenu: (state, action: PayloadAction<boolean>) => {
  state.isMenu = action.payload;
  },
  setIsAnimating: (state, action: PayloadAction<boolean>) => {
  state.isAnimating = action.payload;
  },
  },
  });
  
  export const { updateModal, updateMenu, setIsAnimating } = featureSlice.actions;
  export default featureSlice.reducer;