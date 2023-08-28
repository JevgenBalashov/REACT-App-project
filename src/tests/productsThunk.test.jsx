import products, {
  initialState,
  setFavorites,
  setProductsInBasket,
  handleAddBasketClick,
  handleDeleteBasketClick,
  toggleFavorites,
} from 'src/redux/reducers/productsThunk';

describe('productsThunk', () => {
  it('should return default state when passed an empty action', () => {
    const result = products(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('should set favorite product item with "setFavorites" action', () => {
    const action = { type: setFavorites.type, payload: [1, 2, 3] };
    const result = products(initialState, action);
    expect(result.favorites).toEqual([1, 2, 3]);
  });

  it('should set basket product item with "setProductsInBasket" action', () => {
    const action = {
      type: setProductsInBasket.type,
      payload: [{ id: 1, count: 2 }],
    };
    const result = products(initialState, action);
    expect(result.productsInBasket).toEqual([{ id: 1, count: 2 }]);
  });

  it('should add to basket the product item with "handleAddBasketClick" action', () => {
    const action = {
      type: handleAddBasketClick.type,
      payload: 1,
    };
    const result = products(initialState, action);
    expect(result.productsInBasket).toEqual([{ id: 1, count: 1 }]);
  });

  it('should add to basket addition product item with "handleAddBasketClick" action', () => {
    const action = {
      type: handleAddBasketClick.type,
      payload: 1,
    };
    const result = products(
      { ...initialState, productsInBasket: [{ id: 1, count: 1 }] },
      action
    );
    expect(result.productsInBasket).toEqual([{ id: 1, count: 2 }]);
  });

  it('should delete from basket the product item with "handleDeleteBasketClick" action', () => {
    const action = {
      type: handleDeleteBasketClick.type,
      payload: 1,
    };
    const result = products(
      { ...initialState, productsInBasket: [{ id: 1, count: 1 }] },
      action
    );
    expect(result.productsInBasket).toEqual([]);
  });

  it('should delete from basket one product item with "handleAddBasketClick" action', () => {
    const action = {
      type: handleDeleteBasketClick.type,
      payload: 1,
    };
    const result = products(
      { ...initialState, productsInBasket: [{ id: 1, count: 2 }] },
      action
    );
    expect(result.productsInBasket).toEqual([{ id: 1, count: 1 }]);
  });
});
