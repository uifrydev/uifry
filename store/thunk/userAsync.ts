import { AnyAction, AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../apis/user";
import { setUser } from "../slices/auth";


type GetUserThunk = AsyncThunk<void, {}, any> & { type: string };
export const asyncGetUser = createAsyncThunk(
    "user/getUser",
    async ({}: {}, { dispatch }: { dispatch: (action: AnyAction) => void }) => {
      try {
        let response = await getUser();
        if (response?.data) {
          dispatch(setUser(response?.data));
        }
      } catch (err) {}
    }
  ) as GetUserThunk;