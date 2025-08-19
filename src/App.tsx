import { notification } from 'antd'; // Import do antd normal
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import { loginRoutes } from './modules/login/routes';

const router = createBrowserRouter([...loginRoutes]);

function App() {
  const [api, contextHolder] = notification.useNotification(); // Hook correto

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;