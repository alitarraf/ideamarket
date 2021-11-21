import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  displayName: "",
  photoURL: "",
};

const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
    },
    setSignOut: (state) => {
      state.uid = "";
      state.displayName = "";
      state.photoURL = "";
    },
  },
});

export const { setUserLogin, setSignOut } = userSlice.actions;

export const selectCurrentUser = (state) => state.user;
export const selectCurrentUserUid = (state) => state.user.uid;
export const selectCurrentUserPhoto = (state) => state.user.photoURL;

export default userSlice.reducer;
