import { Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { URL_USER } from "../../../shared/constatns/urls";
import { getAuthorizationToken, unsetAuthorizationToken } from "../../../shared/functions/connection/auth";
import { connectionAPIGet } from "../../../shared/functions/connection/connectionAPI";
import { LoginRoutesConst } from "../../login/routes";
import { ProductRoutesConst } from "../../product/routes";

const FirstScreen = () => {
    const navigate = useNavigate();

    useEffect (() => {
        const verifyToken = async () => {
            const token = getAuthorizationToken()
        if (token) {
            await connectionAPIGet(URL_USER).then(() => {
                navigate(ProductRoutesConst.PRODUCT);
            }).catch(() => {
                unsetAuthorizationToken();
                navigate(LoginRoutesConst.LOGIN);
            });
        } else {
            navigate(LoginRoutesConst.LOGIN);
        }
        };

        verifyToken();
    }, []);

    return <Spin />
};

export default FirstScreen;