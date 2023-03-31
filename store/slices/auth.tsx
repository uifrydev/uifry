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
  token: string;
  user?: any;
}

const initialState: AuthState = {
  token: "",
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearUser: (state) => {
      state.user = undefined;
      state.token=''
    },
  },
});

export const { setUser, setToken, clearUser } = authSlice.actions;

export const selectAuthStatus = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;

export const authReducer = authSlice.reducer;