import { useEffect, useState, createContext, useContext, useRef } from "react";
// import { useSearchParams } from "react-router-dom";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
/*
 * Setting up a auth context to be used globally
 *
 */

interface User {
  firstName: string;
  lastName: string;
  email: string;
  subscriptions: any[];
}

interface AuthState {
  status: string;
  user?: User;
}

const initialState: AuthState = {
  status: "init",
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    clearUser: (state) => {
      state.user = undefined;
    },
  },
});

export const { setUser, setStatus, clearUser } = authSlice.actions;

export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectUser = (state: RootState) => state.auth.user;

export const authReducer = authSlice.reducer;