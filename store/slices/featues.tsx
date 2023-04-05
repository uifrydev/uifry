import { FeatureState } from "@/Interface/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FeatureState = {
  openModal: false,
  openModal1: false,
  proModal: false,
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
    updateModal1: (state, action: PayloadAction<boolean>) => {
      state.openModal1 = action.payload;
    },
    updateProModal: (state, action: PayloadAction<boolean>) => {
      state.proModal = action.payload;
    },
    updateMenu: (state, action: PayloadAction<boolean>) => {
      state.isMenu = action.payload;
    },
    setIsAnimating: (state, action: PayloadAction<boolean>) => {
      state.isAnimating = action.payload;
    },
  },
});

export const { updateModal, updateModal1, updateMenu, setIsAnimating,updateProModal } =
  featureSlice.actions;
export default featureSlice.reducer;
