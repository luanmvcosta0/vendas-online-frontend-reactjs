import type { UserType } from "../../../modules/login/types/UserType";
import { AUTHORIZATION_KEY } from "../../constatns/authorizationConstants";
import { URL_USER } from "../../constatns/urls";
import { getItemStorage, removeItemStorage, setItemStorage } from "./StorageProxy";
import { connectionAPIGet } from "./connectionAPI";

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
    if (token) {
        setItemStorage(AUTHORIZATION_KEY, token);
    }
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLoggedIn = async () => {
    const token = getAuthorizationToken();

    if (token) {
        location.href = '/login';
    }

    await connectionAPIGet<UserType>(URL_USER).catch(() => {
        unsetAuthorizationToken();
            location.href = '/login';
        });
    return null;
};