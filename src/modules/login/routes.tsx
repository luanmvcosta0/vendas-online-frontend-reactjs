import { type RouteObject } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

export const LoginRoutesConst = {
    LOGIN: "/login",
} as const;

export const loginRoutes: RouteObject[] = ([
    {
        path: LoginRoutesConst.LOGIN,
        element: <LoginScreen />,
    }
]);