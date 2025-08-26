import { Tooltip } from 'antd';
import type { ProductType } from '../../../shared/types/ProductType';
import { ImageProduct } from '../styles/tooltipImage.style';

interface TooltipImageProps {
    product: ProductType;
    }

const TooltipImage = ({ product }: TooltipImageProps) => {
    return (
        <Tooltip title={<ImageProduct src={product.image} />}>
            <span>{product.id}</span>
        </Tooltip>
    );
};

export default TooltipImage;