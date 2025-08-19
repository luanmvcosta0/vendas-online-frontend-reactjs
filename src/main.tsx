import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";
import './index.css';
import { loginRoutes } from './modules/login/routes';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal</div>,
    errorElement: <div>Página não encontrada</div>,
  },
];

const router = createBrowserRouter([
  ...loginRoutes,
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)