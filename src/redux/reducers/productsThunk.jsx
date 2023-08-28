import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../extraReducers/getData';
import { handleFavoritesClick } from '../extraReducers/handleFavoritesClick';

// default values for state products
export const initialState = {
  items: [],
  favorites: [],
  productsInBasket: [],
  error: null,
  status: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // set the favorites
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },

    // set product in basket
    setProductsInBasket: (state, action) => {
      state.productsInBasket = action.payload;
    },

    // add/remove favorites id
    toggleFavorites: (state, action) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
      // console.log(state.favorites.slice());
    },

    // add productId in basket
    handleAddBasketClick: (state, action) => {
      // search for product with id equal to action.payload
      const itemFound = state.productsInBasket.some(
        (item) => item.id === action.payload
      );

      // if this product exists
      if (itemFound) {
        state.productsInBasket.find(
          (item) => item.id === action.payload
        ).count += 1;
      } else {
        state.productsInBasket.push({ id: action.payload, count: 1 });
      }

      // set the basket when it changes
      localStorage.setItem('basket', JSON.stringify(state.productsInBasket));
    },

    // delete productId in basket
    handleDeleteBasketClick: (state, action) => {
      // search for index product with id equal to action.payload
      const itemIndex = state.productsInBasket.findIndex(
        (item) => item.id === action.payload
      );

      // if this index exists
      if (itemIndex !== -1) {
        // if count > 1  we minus do 1
        if (state.productsInBasket[itemIndex].count > 1) {
          state.productsInBasket[itemIndex].count -= 1;
        } else {
          // if count <= 1 we deleting product from basket
          state.productsInBasket.splice(itemIndex, 1);
        }

        // set the basket when it changes
        localStorage.setItem('basket', JSON.stringify(state.productsInBasket));
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getData.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });
    builder.addCase(getData.pending, (state, action) => {
      state.error = null;
      state.status = 'pending';
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.error = null;
      state.status = 'fulfilled';
      state.items = action.payload;
    });
    //*** handleFavoritesClick *** add/remove favorites id **********
    builder.addCase(handleFavoritesClick.fulfilled, (state, action) => {});
    builder.addCase(handleFavoritesClick.rejected, (state, action) => {
      console.log('error', action.payload);
    });
  },
});

export const {
  setFavorites,
  setProductsInBasket,
  handleAddBasketClick,
  handleDeleteBasketClick,
  toggleFavorites,
} = productsSlice.actions;
export default productsSlice.reducer;
