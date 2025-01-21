// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../util/axiosInterceptor";
import axios from "axios";
// import { BACKEND_URL } from "../util/config";
import { BACKEND_URL } from "@/util/config";

// Initial state
const initialState = {
  message: "",
  loading: false,
  error: null,
  token: null,
  otpVerified: false,
  status: "",
  dashboardData: {},
  otpSend: false,
  email: "",
  id: "",
  isFetched: false,
  userInfo: { name: "Jagadeesh", role: "Administrator" },
  userRole: "",
  RegisterRole: "",
  otpError: "",
  loginPage: false,
};

// Helper function to set headers
const setHeaders = (token = null) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { headers };
};

// Async thunk for sending OTP
export const sendAuth = createAsyncThunk(
  "auth/sendAuth",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/send-otp",
        new URLSearchParams({ email: body.email }).toString(),
        setHeaders()
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Unknown error occurred");
    }
  }
);

// Async thunk for verifying OTP
export const verifyAuth = createAsyncThunk(
  "auth/verifyAuth",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/validate-otp",
        new URLSearchParams({ email: body.email, otp: body.otp }).toString(),
        setHeaders()
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Unknown error occurred");
    }
  }
);

// Async thunk for Register OTP
export const verifyAuthRegister = createAsyncThunk(
  "auth/verifyAuthRegister",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/validate-otp",
        new URLSearchParams({ email: body.email, otp: body.otp }).toString(),
        setHeaders()
      );
      // console.log(response,"ressss")
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Unknown error occurred");
    }
  }
);

// Async thunk for registering a reporter
export const registerReporter = createAsyncThunk(
  "auth/registerReporter",
  async (body, { rejectWithValue, getState }) => {
    const url = "/update";
    // console.log('body', body);
    const state = getState();
    const token = state.auth.token;
    // console.log(body.formData, token, 'body');
    try {
      const response = await axiosInstance.post(
        url,
        body.formData,
        setHeaders(token)
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Unknown error occurred");
    }
  }
);

// Async thunk for fetching the dashboard data
export const getDashboard = createAsyncThunk(
  "auth/getDashboard",
  async (body, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    // console.log(body, token, 'bodytoken');
    if (token) {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/post/getPostsWithCount`,
          {
            headers: {
              Accept: "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log('Dashboard Res', response);
        return response?.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || "Unknown error occurred"
        );
      }
    }
  }
);

// Create a slice
export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.userRole = "";
      state.otpVerified = false;
    },
    resetOtp: (state) => {
      state.message = "";
      state.email = "";
    },
    loginApp: (state, action) => {
      state.loginPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // sendAuth Cases
      .addCase(sendAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "";
        state.otpError = "";
        state.otpVerified = false;
      })
      .addCase(sendAuth.fulfilled, (state, action) => {
        // console.log('action', action, 'action');
        state.loading = false;
        state.message = action.payload.success ? action.payload.msg : "";
        state.email = action.payload.email;
      })
      .addCase(sendAuth.rejected, (state, action) => {
        // console.log('action', action, 'action');
        state.loading = false;
        state.error = action.payload;
      })
      // verifyAuth Cases
      .addCase(verifyAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpError = "";
      })
      .addCase(verifyAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.otpVerified = action.payload.success ? true : false;
        state.token = action.payload.token;
        state.userRole = action.payload.userRole;
        state.status = action.payload.status;
        state.id = action.payload.user._id;
        state.otpError = action.payload.success ? "" : action.payload.msg;
        state.message = "";
      })
      .addCase(verifyAuth.rejected, (state, action) => {
        // console.log('action', action, 'action');
        state.loading = false;
        state.error = action.payload;
      })
      // verifyAuthRegister Cases
      .addCase(verifyAuthRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpError = "";
        state.otpVerified = false;
      })
      .addCase(verifyAuthRegister.fulfilled, (state, action) => {
        // console.log('action', action.payload, {...state},'action');
        state.loading = false;
        state.otpVerified =
          action.payload.success && action.payload.userRole === "USER"
            ? true
            : false;
        state.otpError = action.payload.success ? "" : action.payload.msg;
        state.userRole = action.payload.userRole;
      })
      .addCase(verifyAuthRegister.rejected, (state, action) => {
        // console.log('action', action, 'action');
        state.loading = false;
        state.error = action.payload;
      })
      // registerReporter Cases
      .addCase(registerReporter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerReporter.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSend =
          action.payload.msg === "User successfully updated"
            ? false
            : !!action.payload.success;
      })
      .addCase(registerReporter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // getDashboard Cases
      .addCase(getDashboard.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(getDashboard.fulfilled, (state, action) => {
        // state.loading = false;
        state.dashboardData = action.payload.success ? action.payload.data : {};
        state.isFetched = true;
        // state.token = action.payload.token;
      })
      .addCase(getDashboard.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logOut, resetOtp, loginApp } = userSlice.actions;
export default userSlice.reducer;
