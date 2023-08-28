import { createAsyncThunk } from '@reduxjs/toolkit';

const url = '/db/db.json';

export const getData = createAsyncThunk(
  'products/getData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error loading products from server');
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
