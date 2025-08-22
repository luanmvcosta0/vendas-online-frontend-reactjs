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

export const verifyLoggedIn = async (setUser: (user: UserType) => void, user?: UserType) => {
    const token = getAuthorizationToken();

    if (token) {
        location.href = '/login';
    }

    if (!user) {
        await connectionAPIGet<UserType>(URL_USER)
            .then((userReturn) => {
                setUser(userReturn);
            })
            .catch(() => {
                unsetAuthorizationToken();
                location.href = '/login';
            });
    }
    return null;
};