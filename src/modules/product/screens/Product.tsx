import { useEffect } from "react";
import { MethodsEnum } from "../../../enums/methods.enum";
import { URL_PRODUCT } from "../../../shared/constatns/urls";
import { useDataContext } from "../../../shared/hooks/useDataContex";
import useRequests from "../../../shared/hooks/useRequests";
import type { ProductType } from "../types/ProductType";

const Product = () => {
    const { products, setProducts } = useDataContext();
    const { request } = useRequests();

    useEffect(() => {
        request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts)
    }, []);

    return products.map((product) => <div key={product.id}>{product.name}</div>) ;
};

export default Product;