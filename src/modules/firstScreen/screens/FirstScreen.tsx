import { Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthorizationToken } from "../../../shared/functions/connection/auth";
import { LoginRoutesConst } from "../../login/routes";
import { ProductRoutesConst } from "../../product/routes";

const FirstScreen = () => {
    const navigate = useNavigate();

    useEffect (() => {
        const token = getAuthorizationToken()
        if (token) {
            navigate(ProductRoutesConst.PRODUCT);
        } else {
            navigate(LoginRoutesConst.LOGIN);
        }
    }, []);

    return <Spin />
};

export default FirstScreen;