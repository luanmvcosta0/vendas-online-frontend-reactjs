import { useGlobalContext } from "../../../shared/hooks/useGlobalContex";

const Product = () => {
    const { user } = useGlobalContext();

    return <div>`Produtos ${user?.name}`</div>
};

export default Product;