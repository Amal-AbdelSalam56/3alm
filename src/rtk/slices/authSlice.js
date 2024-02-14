import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL = import.meta.env.VITE_REACT_APP_API_KEY;

//  "http://api.wearher-from-mimi.com/api";
//  "https://wearher-from-mimi.com/api";

export const signUpUser = createAsyncThunk(
  "signUpUser",
  async ({ user, setLoading }, thunkAPI) => {
    setLoading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(`${URL}/api/register`, user, config);
      // console.log(res);
      //  navigate("/login");
      setLoading(false);
      return res.data;
    } catch (error) {
      // return custom error message from backend if present
      setLoading(false);
      // console.log(error, "error");
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ user, setLoading }, thunkAPI) => {
    setLoading(true);
    console.log(user);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(`${URL}/api/login`, user, config);
      // console.log(res);
      // navigator("/home");
      setLoading(false);
      return res.data;
    } catch (error) {
      // console.log(error);
      setLoading(false);

      if (error.response.status == 401) {
        // navigate("/register");
      }
      // return custom error message from backend if present
      setLoading(false);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "logoutUser",
  async (user, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(`${URL}/api/logout`, user, config);
      // console.log(res);
      // navigator("/home");

      localStorage.removeItem("access_token");
    } catch (error) {
      // return custom error message from backend if present
      // console.log(error);
    }
  }
);
const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    msg: false,
    signIn: false,
    refrech: 0,
    email: localStorage.getItem("email-helnet")
      ? localStorage.getItem("email-helnet")
      : "",
    tokenTset: localStorage.getItem("token-helnet")
      ? localStorage.getItem("token-helnet")
      : "",
    update: {},
    updateComment: {},
    deleteComment_id: {},
    updateSubComment: {},
    deleteSubComment_id: {},
    deletePost_id: {},
    themeColor: localStorage.getItem("color-helnet")
      ? localStorage.getItem("color-helnet")
      : "purple",
    user: JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : "",
    token: localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : "",
    loading: false,
    error: false,
    CurrentStudy: JSON.parse(localStorage.getItem("CurrentStudy"))
      ? JSON.parse(localStorage.getItem("CurrentStudy"))
      : "",
    // currentUser: null,
  },
  reducers: {
    loginGoogle: (state, actions) => {
      // console.log(actions.payload);
      localStorage.setItem("user", JSON.stringify(actions.payload));
      state.user = actions.payload;
    },
    loginStart: (state, actios) => {
      console.log(actios);
      state.token = actios.payload.access_token;
      localStorage.setItem("access_token", actios.payload.access_token);
      state.user = actios.payload.user;

      localStorage.setItem("user", JSON.stringify(actios.payload.user));
    },

    loginSuccess: (state, action) => {
      // console.log("sdf");
      // console.log("action");
      // console.log(action);
      // console.log("state");
      // console.log(state);

      state.loading = false;
      state.user = action.payload;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    loginFailure: (state, actions) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state, actions) => {
      localStorage.removeItem("user");
      localStorage.removeItem("CurrentStudy");
      localStorage.removeItem("access_token");
      state.user = "";
      state.CurrentStudy = "";
      state.update = {};
      state.updateComment = {};
      state.updateSubComment = {};
      state.deleteComment_id = {};
      state.deleteSubComment_id = {};
      state.deletePost_id = {};
    },
    CurrentStudy: (state, action) => {
      state.CurrentStudy = action.payload;
    },
    deleteSign: (state, action) => {
      state.signIn = false;
    },
    refrechPosts: (state, action) => {
      state.refrech += 1;
      state.update = action.payload;
    },
    deletePosts: (state, action) => {
      state.refrech += 1;
      // console.log(action.payload);
      state.deletePost_id = action.payload;
    },
    refrechcomment: (state, action) => {
      state.updateComment = action.payload;
    },
    deletecomment: (state, action) => {
      state.deleteComment_id = action.payload;
    },
    refrechSubcomment: (state, action) => {
      state.updateSubComment = action.payload;
    },
    deleteSubcomment: (state, action) => {
      state.deleteSubComment_id = action.payload;
    },
    colorDispacth: (state, action) => {
      state.themeColor = action.payload;
    },
    emailCheck: (state, action) => {
      state.email = action.payload;
    },
    tokenCheck: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        // console.log(payload, "payload");
        if (payload) {
          state.msg = false;

          // localStorage.setItem("user", JSON.stringify(payload.data));
          // state.user = payload.data;
          state.signIn = true;
        } else {
          state.msg = true;
        }

        state.success = true; // registration successful
      })
      .addCase(signUpUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        // console.log(payload);
        if (payload) {
          state.msg = false;
          localStorage.setItem("user", JSON.stringify(payload.user));
          state.token = payload.access_token;
          localStorage.setItem("access_token", payload.access_token);
          state.user = payload.user;
        } else {
          state.msg = true;
        }

        state.success = true; // registration successful
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    // ... (add other extraReducers as needed)
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  loginGoogle,
  deleteSign,
  CurrentStudy,
  tokenCheck,
  refrechPosts,
  deletePosts,
  refrechcomment,
  deletecomment,
  deleteSubcomment,
  refrechSubcomment,
  colorDispacth,
  emailCheck,
} = authSlice.actions;
export default authSlice.reducer;
