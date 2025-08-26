import { type RouteObject } from "react-router-dom";
import Product from "./screens/Product";
import ProductInsert from "./screens/ProductInsert";

export const ProductRoutesConst = {
    PRODUCT: "/product",
    PRODUCT_INSERT: "/product/insert",
} as const;

export const productsScreens: RouteObject[] = [
    {
        path: ProductRoutesConst.PRODUCT,
        element: <Product/>,
    },
    {
        path: ProductRoutesConst.PRODUCT_INSERT,
        element: <ProductInsert />,
    },
]