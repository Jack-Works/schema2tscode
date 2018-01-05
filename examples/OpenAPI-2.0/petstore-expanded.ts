/* tslint:disable */
/*--------------------------------------------------------------------------------------------
 *  This file is auto-generated on 2018-1-5 23:54:35. DO NOT modify this file directly!
 *  Generated by:
 * 	    schema2ts 0.4.4
 * 	    Typescript ^2.6.0
 *
 *  Schema2ts: https://github.com/Jack-Works/schema2tscode/
 *  Syntax Error in this file? Report there https://github.com/Jack-Works/schema2tscode/issues
 *--------------------------------------------------------------------------------------------*/
import axios, { AxiosInstance, AxiosPromise } from "axios";
export interface _Response<Status, Data> {
    data: Data;
    status: Status;
    statusText: string;
    headers: any;
    request?: any;
}
export const _ = {
    lib: axios.create({ withCredentials: true }),
    removeEmpty(obj: any) {
        const cloned = { ...obj };
        for (const i in cloned) {
            if (cloned[i] === undefined) {
                delete cloned[i];
            }
        }
        return obj;
    },
    getPathParam(url: string, params: any) {
        const data = _.removeEmpty(params);
        for (const key in data) {
            const obj = data[key];
            url = url.replace(`{${key}}`, obj.toString());
        }
        return url;
    },
    async request(url: string, method: string, { query = {}, body = {}, path = {}, headers = {}, bodyType = {}, }: {
            query?: any;
            body?: any;
            path?: any;
            headers?: any;
            bodyType?: "json" | "form";
        }) {
        headers = { ...headers };
        if (!headers["Content-Type"] && bodyType === "form") {
            headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
        const request = await _.lib.request({
            method,
            url: _.getPathParam(url, path),
            params: _.removeEmpty(query),
            data: _.removeEmpty(body),
            headers,
        });
        return {
            data: request.data,
            headers: request.headers,
            request: request.request,
            status: request.status as any,
            statusText: request.statusText,
        };
    },
};
export var findPets_url = "/pets";
export var findPets_method = "get";
export var addPet_url = "/pets";
export var addPet_method = "post";
export var find = pet, by = id_url = "/pets/{id}";
export var find = pet, by = id_method = "get";
export var deletePet_url = "/pets/{id}";
export var deletePet_method = "delete";
export type findPets_parameter_query = {
    "tags"?: undefined;
    "limit"?: number;
};
export type findPets_result_200 = void[];
export type Error = {
    "code"?: number;
    "message"?: string;
};
export type findPets_result_NaN = Error;
/** Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.
 */
export function findPets_invoke(query: findPets_parameter_query): Promise<_Response<200, void[]> | _Response<NaN, Error>> {
    return _.request(findPets_url, findPets_method, { query: query, bodyType: "json" });
}
export type NewPet = {
    "name"?: string;
    "tag": string;
};
export type addPet_result_NaN = Error;
/** Creates a new pet in the store.  Duplicates are allowed */
export function addPet_invoke(body: NewPet): Promise<_Response<NaN, Error>> {
    return _.request(addPet_url, addPet_method, { body: body, bodyType: "json" });
}
export type find = pet;
by;
id_parameter_path = {
    "id": number
};
export type find = pet;
by;
id_result_NaN = Error;
/** Returns a user based on a single ID, if the user does not have access to the pet */
export function find() { }
pet;
by;
id_invoke(path, find, pet, by, id_parameter_path);
Promise < _Response < NaN, Error >> {
    return: _.request(find, pet, by, id_url, find, pet, by, id_method, { path: path, bodyType: "json" })
};
export type deletePet_parameter_path = {
    "id": number;
};
export type deletePet_result_NaN = Error;
/** deletes a single pet based on the ID supplied */
export function deletePet_invoke(path: deletePet_parameter_path): Promise<_Response<NaN, Error>> {
    return _.request(deletePet_url, deletePet_method, { path: path, bodyType: "json" });
}
