import { configureStore } from '@reduxjs/toolkit';
// import products from 'src/redux/reducers/productsReducer';
import products from 'src/redux/reducers/productsThunk';
import modal from 'src/redux/reducers/modalReducer';
// import formBuy from 'src/redux/reducers/formBuyReducer';
import formBuy from 'src/redux/reducers/formBuyThunk';

export const store = configureStore({
  reducer: {
    products,
    modal,
    formBuy,
  },
});
