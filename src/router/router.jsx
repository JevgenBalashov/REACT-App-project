import { createBrowserRouter } from 'react-router-dom';
import { App } from 'src/components/App/App';
import { Basket } from 'src/pages/Basket/Basket';
import { Favorites } from 'src/pages/Favorites/Favorites';
import { Notfound } from 'src/pages/Notfound/Notfound';
import { Shop } from 'src/pages/Shop/Shop';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    errorElement: <Notfound />,
    children: [
      {
        element: <Shop />,
        index: true,
      },
      {
        element: <Basket />,
        path: 'basket',
      },
      {
        element: <Favorites />,
        path: 'favorites',
      },
    ],
  },
]);
