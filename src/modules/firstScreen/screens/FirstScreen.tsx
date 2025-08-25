import { Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContex";
import { ProductRoutesConst } from "../../product/routes";

const FirstScreen = () => {
    const { user } = useGlobalContext();
    const navigate = useNavigate();

    useEffect (() => {
        if (user) {
            navigate(ProductRoutesConst.PRODUCT)
        }
    }, [user]);

    return <Spin />
};

export default FirstScreen;