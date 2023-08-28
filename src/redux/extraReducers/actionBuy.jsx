import { createAsyncThunk } from '@reduxjs/toolkit';
import { setProductsInBasket } from 'src/redux/reducers/productsThunk';

export const actionBuy = createAsyncThunk(
  'formBuy/actionBuy',
  async (action, { getState, dispatch, rejectWithValue }) => {
    try {
      const { name, lastName, age, address, phone, items } = action;

      console.log('name:', name);
      console.log('lastName:', lastName);
      console.log('age:', age);
      console.log('address:', address);
      console.log('phone:', phone);
      console.log('----- придбав -----');
      const price = items.reduce((totalPrice, item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.count} шт.`, item);
        return totalPrice + item.price * item.count;
      }, 0);
      console.log('----- загальна вартість -----');
      console.log(`${price} грн.`);

      localStorage.setItem('basket', JSON.stringify([]));

      dispatch(setProductsInBasket([]));

      return {
        status: true,
        name,
        lastName,
        age,
        address,
        phone,
        items,
      };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
