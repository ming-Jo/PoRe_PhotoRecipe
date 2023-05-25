import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tokenInstance } from '../api/axios';

const initialFollowState = {
  followerData: [],
  followingData: [],
  error: null,
  loading: false,
};

export const getFollowing = createAsyncThunk(
  'following/getFollowing',
  async (value) => {
    const res = await tokenInstance.get(`profile/${value}/following?limit=150`);
    return res;
  },
);

export const getFollower = createAsyncThunk(
  'follower/getFollower',
  async (value) => {
    const res = await tokenInstance.get(`profile/${value}/follower?limit=150`);
    return res;
  },
);

const followSlice = createSlice({
  name: 'follow',
  initialState: initialFollowState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFollowing.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getFollowing.fulfilled, (state, payload) => {
        state.error = null;
        state.loading = false;
        state.followingData = payload;
      })
      .addCase(getFollowing.rejected, (state, payload) => {
        state.error = payload;
        state.loading = false;
      })
      .addCase(getFollower.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getFollower.fulfilled, (state, payload) => {
        state.error = null;
        state.loading = false;
        state.followerData = payload;
      })
      .addCase(getFollower.rejected, (state, payload) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const followAction = followSlice.actions;

export default followSlice.reducer;
