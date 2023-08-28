import { useState } from 'react';
import { ToggleProductsViewContext } from './contexts';

export const ToggleProductsViewProvider = ({ children }) => {
  // toggleView have 2 state: false='grid', true='layout'
  const [toggleView, setToggleView] = useState(true);

  const value = {
    toggleView,
    setToggleView,
  };

  return (
    <ToggleProductsViewContext.Provider value={value}>
      {children}
    </ToggleProductsViewContext.Provider>
  );
};
