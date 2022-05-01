import { createSlice } from "@reduxjs/toolkit";

//user có 3 trạng thái (action):
//bắt đầu đăng nhập: isFetching: true
//đăng nhập thành công: isFetching: false
//đăng nhập thất bại: isFetching: false, error: true

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
