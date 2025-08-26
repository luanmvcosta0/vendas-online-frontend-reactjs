import type { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MethodsEnum } from "../../../enums/methods.enum";
import Button from "../../../shared/components/buttons/button/button";
import Screen from "../../../shared/components/screen/Screen";
import Table from "../../../shared/components/table/Table";
import { URL_PRODUCT } from "../../../shared/constatns/urls";
import { convertNumberToMoney } from "../../../shared/functions/money";
import { useDataContext } from "../../../shared/hooks/useDataContex";
import useRequests from "../../../shared/hooks/useRequests";
import type { ProductType } from "../../../shared/types/ProductType";
import CategoryColumn from "../components/CategoryColumn";
import TooltipImage from "../components/TooltipImagem";
import { ProductRoutesConst } from "../routes";

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
        render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
    },
];

const Product = () => {
    const { products, setProducts } = useDataContext();
    const { request } = useRequests();
    const navigate = useNavigate();

    useEffect(() => {
        request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts)
    }, []);

    const hadleOnClickInsert = () => {
        navigate(ProductRoutesConst.PRODUCT_INSERT);
    };

    return (
    <Screen>
        <Button onClick={hadleOnClickInsert}>Inserir</Button>
        <Table columns={columns} dataSource={products} />;
    </Screen>    
    )
};

export default Product;