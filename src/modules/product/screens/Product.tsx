import type { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { MethodsEnum } from "../../../enums/methods.enum";
import Table from "../../../shared/components/table/table";
import { URL_PRODUCT } from "../../../shared/constatns/urls";
import { useDataContext } from "../../../shared/hooks/useDataContex";
import useRequests from "../../../shared/hooks/useRequests";
import type { ProductType } from "../types/ProductType";

const columns: ColumnsType<ProductType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Preço',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <a>{text}</a>,
    },
];

const Product = () => {
    const { products, setProducts } = useDataContext();
    const { request } = useRequests();

    useEffect(() => {
        request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts)
    }, []);

    return <Table columns={columns} dataSource={products} />;
};

export default Product;