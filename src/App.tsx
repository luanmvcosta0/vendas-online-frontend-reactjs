import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { firstScreenRoutes } from './modules/firstScreen/routes';
import { loginRoutes } from './modules/login/routes';
import { productsScreens } from './modules/product/routes';
import { useNotification } from './shared/hooks/useNotification';

const router = createBrowserRouter([...loginRoutes, ...firstScreenRoutes, ...productsScreens  ]);

function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;