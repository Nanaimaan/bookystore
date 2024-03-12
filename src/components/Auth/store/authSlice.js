import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import fire, { auth } from "../../../helpers/Fire";
import { ADMIN_EMAIL } from "../../../helpers/Const";
import { useNavigate } from "react-router-dom";

export const signup = createAsyncThunk("users/signup", async (user) => {
  const authresult = await fire
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password);

  return authresult;
});

export const login = createAsyncThunk("users/login", async (user) => {
  const res = await fire
    .auth()
    .signInWithEmailAndPassword(user.email, user.password);
  return { user: { email: res.user.email } };
});

export const authListener = createAsyncThunk(
  "users/check",
  async (arg, { dispatch }) => {
    await fire.auth().onAuthStateChanged((user) => {
      if (user) {
        let newUser = {
          user: user.email,
          isAdmin: user.email === ADMIN_EMAIL ? true : false,
          isLogged: true,
        };
        dispatch(setUser(newUser));
        console.log(newUser, "new");
        return { newUser };
      } else {
        return {};
      }
    });
  }
);

const initialState = {
  email: "",
  user: {},
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("currentUser");
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: {
    [signup.fulfilled]: (state, { payload }) => {
      const data = payload;
      state.user = data;
      state.loading = false;
    },
    [signup.rejected]: (state, { payload, error }) => {
      state.loading = true;
      if (error.code === "auth/invalid-email") {
        state.error = "Invalid email";
      }
      state.error = error.message;
      return;
    },

    [signup.pending]: (state, { payload }) => {
      state.loading = true;
    },
    //login block ----------line
    [login.fulfilled]: (state, { payload: { user }, error }) => {
      state.user = user;

      let newUser = {
        user: user.email,
        isAdmin: user.email === ADMIN_EMAIL ? true : false,
        isLogged: true,
      };
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      state.loading = false;
    },
    [login.rejected]: (state, { payload, error }) => {
      state.loading = true;
      state.error = error.message;
    },

    [login.pending]: (state, action) => {
      state.loading = true;
    },
    // Authlistener block

    [authListener.fulfilled]: (state, { payload: newUser }) => {
      console.log(newUser, "payload");

      // localStorage.setItem("currentUser", JSON.stringify(authUser));
      // state.user = newUser;
      state.loading = true;
    },
  },
});

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
