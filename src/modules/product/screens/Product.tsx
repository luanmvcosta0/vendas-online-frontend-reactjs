import type { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { MethodsEnum } from "../../../enums/methods.enum";
import Table from "../../../shared/components/table/Table";
import { URL_PRODUCT } from "../../../shared/constatns/urls";
import { useDataContext } from "../../../shared/hooks/useDataContex";
import useRequests from "../../../shared/hooks/useRequests";
import type { ProductType } from "../../../shared/types/ProductType";
import CategoryColumn from "../components/CategoryColumn";
import TooltipImage from "../components/ToolTipImagem";

const columns: ColumnsType<ProductType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (_, product) => <TooltipImage product={product}/>,
    },
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (_, product) => <CategoryColumn category={product.category}/>,
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