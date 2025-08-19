import axios from "axios";
import { MethodsEnum } from "../../constatns/enums/methods.enum";

export default class ConnectionAPI {
    static async call<T>(url: string, method: string, body: unknown) {
        switch (method) {
            case MethodsEnum.GET:
                return (await axios.get<T>(url)).data;
            case MethodsEnum.POST:
                return (await axios.post<T>(url)).data;
            case MethodsEnum.DELETE:
                return (await axios.delete<T>(url)).data;
            case MethodsEnum.PATCH:
                return (await axios.patch<T>(url)).data;
            case MethodsEnum.PUT:
                return (await axios.put<T>(url)).data;
        }
    }

    static async connect<T>(url: string, method: string, body: unknown) {
        return ConnectionAPI.call<T>(url, method, body).catch((error => {
            if (error.response) {
                switch (error.response.status) {
                    case 401:                   
                    case 403:
                        throw new Error('Sem permissão') 

                    default:
                        throw new Error('Erro de conexão')
                }
            }
        }));
    }
}