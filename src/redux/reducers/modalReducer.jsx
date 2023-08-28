import { createSlice } from '@reduxjs/toolkit';

// default values for state modal
const initialState = {
  isOpen: false,
  header: '',
  closeButton: true,
  name: '',
  price: '',
  action: [
    {
      text: '',
      backgroundColor: '',
      actionBasket: null,
    },
  ],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      return { ...state, isOpen: false };
    },
    openModal: (state, action) => {
      const {
        header,
        closeButton,
        name,
        price,
        action: modalAction,
      } = action.payload;

      return {
        isOpen: true,
        header,
        closeButton,
        name,
        price,
        action: modalAction,
      };
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
