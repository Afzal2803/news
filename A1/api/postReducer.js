// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { BACKEND_URL } from "../util/config";
import { BACKEND_URL } from "@/util/config";

import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// for the news
export const getFeed = createAsyncThunk("feed/getFeed", async (body) => {
  console.log("testing", body);
  const response = await axios.post(`${BACKEND_URL}/post/getPosts`, body);
  console.log("response1", response);
  return { data: response.data.posts, page: body.page, limit: body.limit };
  // return response.data.posts;
});

// Async thunk for sending OTP

export const createPost = createAsyncThunk(
  "post/createPost",
  async (body, { rejectWithValue, getState }) => {
    const state = getState();
    // const token = state.auth.token;
    const url = body?.updatePost ? "editPost" : "createPost";
    // console.log(body, "body");
    const token = sessionStorage.getItem("token");
    // console.log(token, "bodytoken");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/post/${url}`,
        body.formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("response1", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const createQuiz = createAsyncThunk(
  "/post/createQuiz",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/quiz/createQuiz`,
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      // console.log({error})
      return rejectWithValue(error.response);
    }
  }
);

export const createPoll = createAsyncThunk(
  "/post/createPoll",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/polls/createPoll`,
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log({ error });
      return rejectWithValue;
    }
  }
);

export const createCarousel = createAsyncThunk(
  "/post/createCarousel",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/carousel/createCarousel`,
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log({ error });
      return rejectWithValue;
    }
  }
);

export const DeleteNews = createAsyncThunk(
  "/post/deletepost",
  async (body, { rejectWithValue }) => {
    // console.log(body, "body");
    const token = sessionStorage.getItem("token");
    // console.log(token, "bodytoken");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/post/deletepost`,
        new URLSearchParams({
          postId: body.postId,
        }).toString(),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log('response1', response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const EditCategories = createAsyncThunk(
  "/post/EditCategories",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    // console.log(body, "bodu");
    try {
      const response = await axios.put(
        `${BACKEND_URL}/category/categories/${body?._id}`,
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
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

export const EditQuiz = createAsyncThunk(
  "post/EditQuiz",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.put(
        `${BACKEND_URL}/quiz/updateQuiz/${body.id}`,
        body.formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token} `,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const EditPoll = createAsyncThunk(
  "post/EditPoll",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.put(
        `${BACKEND_URL}/polls/updatePoll/${body._id}`,
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token} `,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const EditCarousel = createAsyncThunk(
  "post/EditCarousel",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.put(
        `${BACKEND_URL}/carousel/editCarousel/${body._id}`,
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token} `,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const PostCategories = createAsyncThunk(
  "/post/PostCategories",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/category/categories`,
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token} `,
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

export const CategoriesStatus = createAsyncThunk(
  "/post/CategoriesStatus",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/category/categoriesStatus/${body._id}`,
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token} `,
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

export const DeleteCategory = createAsyncThunk(
  "/post/DeleteCategory",
  async (body, { rejectWithValue }) => {
    // console.log(body, "body");
    const token = sessionStorage.getItem("token");
    // console.log(token, "bodytoken");
    try {
      const response = await axios.delete(
        `${BACKEND_URL}/category/categories/${body.id} `,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token} `,
          },
        }
      );
      // console.log("response1", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const updatePostStatus = createAsyncThunk(
  "post/updatepoststatus",
  async (body, { rejectWithValue, getState }) => {
    const state = getState();
    // const token = state.auth.token;
    // console.log(body, "body");
    const token = sessionStorage.getItem("token");
    // console.log(token, "bodytoken");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/post/updatepoststatus`,
        new URLSearchParams({
          postId: body.postId,
          status: body.status,
        }).toString(),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token} `,
          },
        }
      );
      // console.log('response1', response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const updateReporterStatus = createAsyncThunk(
  "post/updateStatus",
  async (body, { rejectWithValue }) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.post(`${BACKEND_URL}/updateStatus`, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

export const dashboardMonthlyPost = createAsyncThunk(
  "post/dashboardMonthlyPost",
  async ({ month, year }, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (token) {
      try {
        const payload = {
          month: month,
          year: year,
        };
        const response = await axios.post(
          `${BACKEND_URL}/post/monthlyPostCounts`,
          payload,
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
        return rejectWithValue(error.response.data); // Returning error response data
      }
    }
  }
);

export const updateProfile = createAsyncThunk(
  "post/updateProfile",
  async (body, { rejectWithValue, getState }) => {
    // console.log("body", body);
    const state = getState();
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.post(`${BACKEND_URL}/updateProfile`, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Returning error response data
    }
  }
);

// export const verifyAuth = createAsyncThunk(
//   'auth/verifyAuth',
//   async ({rejectWithValue, getState}) => {
//     console.log(body, 'otp');
//     try {
//       const response = await axiosInstance.post(
//         '/validate-otp',
//         new URLSearchParams({email: body.email, otp: body.otp}).toString(),
//         {
//           headers: {
//             Accept: 'application/json',

//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         },
//       );
//       console.log('response1', response);
//       return response.data;
//     } catch (error) {
//       console.log(error, 'errorrespo');
//       return rejectWithValue(error.response.data); // Returning error response data
//     }
//   },
// );

// export const registerReporter = createAsyncThunk(
//   'auth/registerReporter',
//   async (body, {rejectWithValue}) => {
//     console.log(body, 'otp');
//     try {
//       const response = await axiosInstance.post('/register', body, {
//         headers: {
//           Accept: 'application/json',

//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       });
//       console.log('response1', response);
//       return response.data;
//     } catch (error) {
//       console.log(error, 'errorrespo');
//       return rejectWithValue(error.response.data); // Returning error response data
//     }
//   },
// );

const initialState = {
  postMessage: "",
  DeleteMessage: "",
  CreateCategories: [],
  CreateCategoriesStatus: [],
  EditCategories: [],
  loading: false, // Added loading state
  error: null, // Added error state
  otpVerified: "",
  otpSend: false,
  dashboardMonthlyData: {},
  isMonthly: false,
  postStatus: false,
  userStatus: false,
  postEditProfile: "",
  newsFeed:[],
};

// Create a slice
export const commonSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetFetch: (state) => {
      state.isMonthly = false;
    },
    resetLogout: (state) => {
      state.postMessage = "";
    },
  },
  extraReducers: (builder) => {
    // Moved extraReducers here
    builder
      .addCase(getFeed.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.newsFeed = action.payload.data; // Payload should match API response structure
        console.log(action)
      })
      .addCase(getFeed.rejected, (state, action) => {
        // console.error
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.postMessage = action.payload.success ? action.payload.msg : "";
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg; // Changed to error state
      });

    builder
      .addCase(createQuiz.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      })
      .addCase(createQuiz.fulfilled, (state, action) => {
        state.loading = false;
        state.postMessage = action.payload.success ? action.payload.msg : "";
      })
      .addCase(createQuiz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.msg; // Changed to error state
      });

    builder
      .addCase(createPoll.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      })
      .addCase(createPoll.fulfilled, (state, action) => {
        state.loading = false;
        state.postMessage = action.payload.success ? action.payload.msg : "";
      })
      .addCase(createPoll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.msg; // Changed to error state
      });

    builder
      .addCase(createCarousel.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      })
      .addCase(createCarousel.fulfilled, (state, action) => {
        console.log(action, "action");
        state.loading = false;
        state.postMessage = action.payload.success ? action.payload.msg : "";
      })
      .addCase(createCarousel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.msg; // Changed to error state
      });

    builder
      .addCase(DeleteNews.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.postMessage = false;
      })

      .addCase(DeleteNews.fulfilled, (state, action) => {
        state.loading = false;
        state.postMessage = action.payload.success ? action.payload.msg : "";
      })
      .addCase(DeleteNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg; // Changed to error state
      });

    builder
      .addCase(DeleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.DeleteMessage = false;
      })

      .addCase(DeleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.DeleteMessage = action.payload.success
          ? action.payload.message
          : "";
      })
      .addCase(DeleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Changed to error state
      });

    builder
      .addCase(PostCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(PostCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.CreateCategories = action.payload.success
          ? action.payload.categories
          : [];
      })
      .addCase(PostCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Changed to error state
      });
    builder
      .addCase(CategoriesStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(CategoriesStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.CreateCategoriesStatus = action.payload.success
          ? action.payload.categories
          : [];
      })
      .addCase(CategoriesStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Changed to error state
      });
    builder
      .addCase(EditCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(EditCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.EditCategories = action.payload.success
          ? action.payload.categories
          : [];
      })
      .addCase(EditCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Changed to error state
      });

    builder
      .addCase(EditQuiz.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(EditQuiz.fulfilled, (state, action) => {
        state.loading = false;
        state.EditQuiz = action.payload.success
          ? action.payload.categories
          : [];
      })
      .addCase(EditQuiz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Changed to error state
      });

    builder
      .addCase(EditPoll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(EditPoll.fulfilled, (state, action) => {
        state.loading = false;
        state.EditPoll = action.payload.success
          ? action.payload.categories
          : [];
      })
      .addCase(EditPoll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Changed to error state
      });

    builder
      .addCase(updatePostStatus.pending, (state) => {
        state.loading = true;
        state.postStatus = false;
      })

      .addCase(updatePostStatus.fulfilled, (state, action) => {
        // console.log(action.payload.success, 'erroraction2');
        state.loading = false;
        state.postStatus = action.payload.success ? true : false;
      })
      .addCase(updatePostStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Changed to error state
      });
    builder
      .addCase(updateReporterStatus.pending, (state) => {
        state.loading = true;
        state.userStatus = false;
      })

      .addCase(updateReporterStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.userStatus = action.payload.success ? true : false;
      })
      .addCase(updateReporterStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg; // Changed to error state
      })

      // dashboardMonthlyPost Cases
      .addCase(dashboardMonthlyPost.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(dashboardMonthlyPost.fulfilled, (state, action) => {
        // console.log('Action ', action);
        // state.loading = false;
        state.dashboardMonthlyData = action.payload.success
          ? action.payload.counts
          : {};
        state.isMonthly = true;
      })
      .addCase(dashboardMonthlyPost.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.payload.msg;
      });

    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.postEditProfile = action?.payload?.success
          ? action?.payload?.msg
          : "";
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.msg; // Changed to error state
      });
  },
});
export const { resetFetch, resetLogout } = commonSlice.actions;

export const postReducer = commonSlice.reducer;
