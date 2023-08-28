import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'src/Layout/Layout';
import { getData } from 'src/redux/extraReducers/getData';
import {
  setFavorites,
  setProductsInBasket,
} from 'src/redux/reducers/productsThunk';
import { ToggleProductsViewProvider } from 'src/contexts/ToggleProductsViewProvider';

const favoriteIdsFromStorage = localStorage.getItem('favorites');
const basketIdsFromStorage = localStorage.getItem('basket');

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (favoriteIdsFromStorage) {
      dispatch(setFavorites(JSON.parse(favoriteIdsFromStorage)));
    }

    if (basketIdsFromStorage) {
      dispatch(setProductsInBasket(JSON.parse(basketIdsFromStorage)));
    }
  }, [dispatch]);

  return (
    <ToggleProductsViewProvider>
      <Layout />
    </ToggleProductsViewProvider>
  );
};
