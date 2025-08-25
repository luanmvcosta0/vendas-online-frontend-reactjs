import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import { MethodsEnum } from './enums/methods.enum';
import { firstScreenRoutes } from './modules/firstScreen/routes';
import { loginRoutes } from './modules/login/routes';
import { productsScreens } from './modules/product/routes';
import { URL_USER } from './shared/constatns/urls';
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContex';
import { useNotification } from './shared/hooks/useNotification';
import useRequests from './shared/hooks/useRequests';

  const routes: RouteObject[] = [...loginRoutes];
  const routesLoggedIn: RouteObject[] = [...productsScreens, ...firstScreenRoutes].map((route) => ({
    ...route,
    loader: verifyLoggedIn,
  }));

  const router = createBrowserRouter([...routes, ...routesLoggedIn]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext();
  const { request } = useRequests();

  useEffect(() => {
    request(URL_USER, MethodsEnum.GET, setUser)
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;