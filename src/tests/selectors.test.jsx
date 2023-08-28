import * as selectors from 'src/redux/selectors/selectors';

describe('redux selector selectorGetProducts', () => {
  it('should select selectorGetProducts from state object', () => {
    const products = {
      items: ['product1', 'product2'],
      favorites: [1, 2, 3],
      productsInBasket: [
        { id: 1, count: 2 },
        { id: 2, count: 1 },
      ],
      error: null,
      status: 'fulfilled',
    };
    const result = selectors.selectorGetProducts({ products });
    expect(result).toEqual(products);
  });
});

describe('redux selector selectorGetModalState', () => {
  it('should select selectorGetModalState from state object', () => {
    const modal = {
      isOpen: false,
      header: 'Header 1',
      closeButton: true,
      name: 'testing modal product name',
      price: '123',
      action: [
        {
          text: 'OK',
          backgroundColor: '#333',
          actionBasket: null,
        },
      ],
    };
    const result = selectors.selectorGetModalState({ modal });
    expect(result).toEqual(modal);
  });
});
