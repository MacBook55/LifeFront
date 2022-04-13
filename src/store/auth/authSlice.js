import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
  'auth/getUsers',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get('http://localhost:8080/customer');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Logout
export const logout = createAsyncThunk(
  'auth/logout',
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      localStorage.removeItem('user');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Register
export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post('http://localhost:8080/customer', userData);
      if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Login
export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post('http://localhost:8080/login', userData);
      if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(/*error.message,*/"ay 7aga");
    }
  }
);

//get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: null,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: {
    //register
    [register.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.isError = null;
    },
    [register.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      console.log(action);
      state.user = null;
    },
    //login
    [login.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.isError = null;
    },
    [login.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [getUsers.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.products = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;