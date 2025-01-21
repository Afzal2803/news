import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { BACKEND_URL } from "../util/config";
import { BACKEND_URL } from "@/util/config";

// Async thunk for sending OTP

export const getProfile = createAsyncThunk(
  "get/getProfile",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    // console.log(token, "bodytoken");

    if (!token) {
      return;
    }
    try {
      const response = await axios.get(`${BACKEND_URL}/getProfile`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      });
      // console.log("response1", response);
      sessionStorage.setItem("userData", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const getCategories = createAsyncThunk(
  "get/getCategories",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/category/categories`);
      // console.log('response1', response);
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const getPostByStatus = createAsyncThunk(
  "get/getPostByStatus",
  async (body, { rejectWithValue }) => {
    // console.log("postbystatus", body);
    const token = sessionStorage.getItem("token");
    // console.log(token, "bodytoken");
    try {
      const response = await axios.get(
        `${BACKEND_URL}/post/getPostByStatus?status=${body.status}&role=${body.role}&id=${body.id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log('response1', response);
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const SearchEmailMonth = createAsyncThunk(
  "get/SearchEmailMonth",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    try {
      const checkMonth =  body.month  ? `${body.year}-${body.month}` : ''
      const response = await axios.get(
        `${BACKEND_URL}/searchUsers?emailText=${body.emailText}&userRole=${body.userRole}&month=${checkMonth}&fullName=${body.fullName}&status=${body.status}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("response1", response);
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const getAllPostsByStatus = createAsyncThunk(
  "get/getAllPostsByStatus",
  async (body, { rejectWithValue }) => {
    const { role, category, month, year } = body;
    const categoryParam = category?.map(encodeURIComponent).join(",");
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/post/allStatusPosts?role=${role}&category=${categoryParam}&month=${month}&year=${year}`,
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log('response1', response);
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const getReportersByStatus = createAsyncThunk(
  "get/getReportersByStatus",
  async (body, { rejectWithValue }) => {
    const { status, role } = body;
    const token = sessionStorage.getItem("token");
    // console.log(body,  "bodytoken");
    try {
      const response = await axios.get(
        `${BACKEND_URL}/getAllReporters?status=${status}&role=${role}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log('response1', response);
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const getAllReporters = createAsyncThunk(
  "get/getAllReporters",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/getAllReporters?status=ALL&role=${body.role}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        // console.log(error, "errorrespo");
        return rejectWithValue(error.response.data); // Returning error response data
      }
    }
  }
);

export const getPolls = createAsyncThunk(
  "get/getPolls",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/polls/getPolls`);
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const getQuizzes = createAsyncThunk(
  "get/getQuizzes",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/quiz/getQuizzes`);
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const getCarousel = createAsyncThunk(
  "get/getCarousel",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/carousel/getCarousel`);
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const getAllApprovedPostsCount = createAsyncThunk(
  "get/getAllApprovedPostsCount",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/post/getAllApprovedPostsCount`);
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const graphData = createAsyncThunk(
  "get/graphData",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/post/graphData`);
      return response.data;
    } catch (error) {
      // console.log(error, "errorrespo");
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

const initialState = {
  message: "",
  loading: false, // Added loading state
  error: null, // Added error state
  categoriesDropDown: [], // Added Token state
  otpVerified: "",
  otpSend: false,
  posts: [],
  allPosts: {},
  reporters: [],
  allReporters: {},
  polls: [],
  quizzes: {},
  carousel: {},
  getAllApprovedCount: {},
  getGraphData: {},
  user: {},
  postLoading: false,
  reporterLoading: false,
};

// Create a slice
export const commonSlice = createSlice({
  name: "get",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Moved extraReducers here

    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      })

      .addCase(getProfile.fulfilled, (state, action) => {
        // console.log(action, "action");
        state.loading = false;
        state.user = action?.payload?.success ? action?.payload?.profile : "";
      })
      .addCase(getProfile.rejected, (state, action) => {
        // console.log(action, "action Mssage");

        state.loading = false;
        state.error = action?.payload?.msg; // Changed to error state
      });

    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCategories.fulfilled, (state, action) => {
        // console.log(action.payload, 'erroraction2');
        state.loading = false;
        state.categoriesDropDown = action.payload.success
          ? action.payload.categories
          : [];
      })
      .addCase(getCategories.rejected, (state, action) => {
        console.log(action, "erroraction3");
        state.loading = false;
        state.error = action.error.message; // Changed to error state
      });
    builder
      .addCase(getPostByStatus.pending, (state) => {
        // console.log(state, 'erroraction1');
        state.postLoading = true;
        state.error = null;
      })

      .addCase(getPostByStatus.fulfilled, (state, action) => {
        // console.log(action.payload, 'erroraction2');
        state.postLoading = false;
        state.posts = action.payload.success ? action.payload.posts : [];
      })
      .addCase(getPostByStatus.rejected, (state, action) => {
        console.log(action, "erroraction3");
        state.postLoading = false;
        state.error = action.payload.msg; // Changed to error state
      });
    builder
      .addCase(getAllPostsByStatus.pending, (state) => {
        // console.log(state, 'erroraction1');
        state.postLoading = true;
        state.error = null;
      })

      .addCase(getAllPostsByStatus.fulfilled, (state, action) => {
        // console.log(action, "erroraction2");
        state.postLoading = false;
        state.allPosts = action.payload.success
          ? action.payload.groupedPosts
          : {};
      })
      .addCase(getAllPostsByStatus.rejected, (state, action) => {
        // console.log(action, "erroraction3");
        state.postLoading = false;
        state.error = action.error.message; // Changed to error state
      });
    builder
      .addCase(SearchEmailMonth.pending, (state) => {
        // console.log(state, 'erroraction1');
        state.reporterLoading = true;
        state.error = null;
      })

      .addCase(SearchEmailMonth.fulfilled, (state, action) => {
        // console.log(action, "erroraction2");
        state.reporterLoading = false;
        state.reporters = action.payload.success
          ? action.payload.reporters
          : [];
      })
      .addCase(SearchEmailMonth.rejected, (state, action) => {
        // console.log(action, "erroraction3");
        state.reporterLoading = false;
        state.error = action.error.message; // Changed to error state
      });
    builder
      .addCase(getReportersByStatus.pending, (state) => {
        // console.log(state, 'erroraction1');
        state.reporterLoading = true;
        state.error = null;
      })

      .addCase(getReportersByStatus.fulfilled, (state, action) => {
        // console.log(action.payload, 'erroraction2');
        state.reporterLoading = false;
        state.reporters = action.payload.success
          ? action.payload.reporters
          : [];
      })
      .addCase(getReportersByStatus.rejected, (state, action) => {
        // console.log(action, "erroraction3");
        state.reporterLoading = false;
        state.error = action.error.message; // Changed to error state
      });
    builder
      .addCase(getAllReporters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getAllReporters.fulfilled, (state, action) => {
        state.loading = false;
        state.allReporters = action?.payload?.success ? action.payload : {};
      })
      .addCase(getAllReporters.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message; // Changed to error state
      });
    builder
      .addCase(getPolls.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getPolls.fulfilled, (state, action) => {
        state.loading = false;
        state.polls = action.payload.success ? action.payload.poll : {};
      })
      .addCase(getPolls.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message; // Changed to error state
      });
    builder
      .addCase(getQuizzes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.quizzes = action.payload.success ? action.payload : {};
      })
      .addCase(getQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message; // Changed to error state
      });
    builder
      .addCase(getCarousel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCarousel.fulfilled, (state, action) => {
        state.loading = false;
        state.carousel = action.payload.success ? action.payload : {};
      })
      .addCase(getCarousel.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message; // Changed to error state
      });
    builder
      .addCase(getAllApprovedPostsCount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllApprovedPostsCount.fulfilled, (state, action) => {
        state.loading = false;
        state.getAllApprovedCount = action.payload.success
          ? action.payload
          : {};
      })
      .addCase(getAllApprovedPostsCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message; // Changed to error state
      });
    builder
      .addCase(graphData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(graphData.fulfilled, (state, action) => {
        state.loading = false;
        state.getGraphData = action.payload.success ? action.payload : {};
      })
      .addCase(graphData.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message; // Changed to error state
      });
  },
});

export const getReducer = commonSlice.reducer;
