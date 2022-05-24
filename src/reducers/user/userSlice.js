import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: "",
  fullName: "",
  token: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
    },
    unsetUser: (state) => {
      state.email = "";
      state.fullName = "";
      state.token = "";
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;