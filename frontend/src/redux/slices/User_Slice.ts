import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAdmin: false,
    email:null,
    token:null
  },
  reducers: {
    setUserData: (state, action) => {
      const { isAdmin, email,token } = action.payload;
      state.isAdmin = isAdmin;
      state.email = email;
      state.token=token
    },
    clearUserData: (state) => {
      state.isAdmin = false;
      state.email=null;
      state.token=null
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
