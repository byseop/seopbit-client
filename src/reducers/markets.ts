import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { upbitApi } from '@src/api/upbit';
import type { MarketCode } from '@src/types/upbit';
import { RootReducerTypes } from '.';

interface State {
  data: MarketCode[] | null;
  loading: boolean;
  error: any;
  requestId: string;
}

const initialState: State = {
  data: null,
  loading: false,
  error: null,
  requestId: ''
};

export const fetchMarkets = createAsyncThunk(
  'markets/getMarkets',
  async (_, { getState, requestId }) => {
    const { loading, requestId: curRequestId } = (
      getState() as RootReducerTypes
    )['markets'];
    if (!loading || requestId !== curRequestId) return;
    try {
      const response = await axios.request(upbitApi.getAllMarket);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.data);
      }
    } catch (e) {
      return e;
    }
  }
);

const marketSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMarkets.pending.type]: (state, action) => {
      state.loading = true;
      state.requestId = action.meta.requestId;
    },
    [fetchMarkets.fulfilled.type]: (state, action) => {
      const { requestId } = action.meta;
      if (requestId === state.requestId) {
        state.loading = false;
        state.data = action.payload;
      }
    },
    [fetchMarkets.rejected.type]: (state, action) => {
      const { requestId } = action.meta;
      if (requestId === state.requestId) {
        state.loading = false;
        state.error = action.payload;
      }
    }
  }
});

export default marketSlice;
