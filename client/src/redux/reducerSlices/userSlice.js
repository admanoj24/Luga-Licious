import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  token: "",
  isLoggedIn: false,
  firstName: "",
  lastName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logoutUser: (state) => {
      return initialState;
    },
    addLoginDetails: (state, action) => {
      return {
        ...state,
        email: action.payload.user?.email,
        token: action.payload?.token,
        isLoggedIn: action.payload?.isLoggedIn,
        firstName: action.payload?.user.firstName,
        _id: action.payload?.user._id,
        lastName: action.payload?.user.lastName,
      };
    },
  },
});
export const { logoutUser, addLoginDetails } = userSlice.actions;

export default userSlice.reducer;
