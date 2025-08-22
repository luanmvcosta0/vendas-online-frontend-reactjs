import { type RouteObject } from "react-router-dom";
import Product from "./screens/Product";

export const ProductRoutesConst = {
    PRODUCT: "/product",
} as const;

export const productsScreens: RouteObject[] = [
    {
        path: ProductRoutesConst.PRODUCT,
        element: <Product/>
    }
]