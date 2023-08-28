import { createAsyncThunk } from '@reduxjs/toolkit';
import { toggleFavorites } from '../reducers/productsThunk';

export const handleFavoritesClick = createAsyncThunk(
  'products/handleFavoritesClick',
  async (idFavorite, { getState, dispatch, rejectWithValue }) => {
    try {
      dispatch(toggleFavorites(idFavorite));
      const { products } = getState();
      localStorage.setItem('favorites', JSON.stringify(products.favorites));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
