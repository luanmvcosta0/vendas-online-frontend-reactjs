import { AUTHORIZATION_KEY } from "../../constatns/authorizationConstants";
import { getItemStorage, removeItemStorage, setItemStorage } from "./StorageProxy";

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
    if (token) {
        setItemStorage(AUTHORIZATION_KEY, token);
    }
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);