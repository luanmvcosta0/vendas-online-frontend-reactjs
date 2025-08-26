import Screen from "../../../shared/components/screen/Screen";
import { ProductRoutesConst } from "../routes";

const ProductInsert = () => {
    return (
        <Screen
            listBreadcrumb={[
            {
                name: 'HOME',
            },
            {
                name: 'PRODUTOS',
                navigateTo: ProductRoutesConst.PRODUCT,
            },
            {
                name: 'INSERIR PRODUTO',
            },
            ]}
        >
            Inserir produto
        </Screen>
    );
};

export default ProductInsert;