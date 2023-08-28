import { createSlice } from '@reduxjs/toolkit';
import { actionBuy } from '../extraReducers/actionBuy';

// default values for formBuy
const initialState = {
  status: false,
  name: '',
  lastName: '',
  age: 0,
  address: '',
  phone: '',
  items: [],
};

const formBuySlice = createSlice({
  name: 'formBuy',
  initialState,
  reducers: {
    clearStatus: (state, actions) => {
      state.status = false;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase('formBuySlice/actionBuy', (state, action) => {
    //   const valueAction = action.payload;
    //   console.log('extra', valueAction);
    // });

    builder.addCase(actionBuy.fulfilled, (state, action) => {
      const { name, lastName, age, address, phone, items } = action.payload;
      return {
        ...state,
        status: true,
        name,
        lastName,
        age,
        address,
        phone,
        items,
      };
    });
    builder.addCase(actionBuy.rejected, (state, action) => {
      console.log('error', action.payload);
    });
  },
});

// export const actionBuy = createAction('formBuySlice/actionBuy');
export const { clearStatus } = formBuySlice.actions;
export default formBuySlice.reducer;
