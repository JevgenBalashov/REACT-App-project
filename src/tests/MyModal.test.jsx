import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MyModal } from 'src/UI/MyModal/MyModal';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);

describe('MyModal', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      modal: {
        isOpen: true,
        header: 'Modal Header',
        closeButton: true,
        name: 'Product Name',
        price: 100,
        action: [
          {
            text: 'Add to basket',
            backgroundColor: '#000',
            actionBasket: jest.fn(),
          },
        ],
      },
    });
  });

  it('renders modal content', () => {
    render(
      <Provider store={store}>
        <MyModal />
      </Provider>
    );

    expect(screen.getByText('Modal Header')).toBeInTheDocument();
    expect(screen.getByText('Product Name')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Add to basket')).toBeInTheDocument();
  });
});
