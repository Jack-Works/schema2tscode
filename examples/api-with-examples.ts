/* tslint:disable */
/*--------------------------------------------------------------------------------------------
 *  This file is auto-generated on 2018-1-5 17:41:45. DO NOT modify this file directly!
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
export var listVersionsv2_url = "/";
export var listVersionsv2_method = "get";
export var getVersionDetailsv2_url = "/v2";
export var getVersionDetailsv2_method = "get";
/** List API versions */
export function listVersionsv2_invoke(): Promise<_Response<any, any>> {
    return _.request(listVersionsv2_url, listVersionsv2_method, { bodyType: "json" });
}
/** Show API version details */
export function getVersionDetailsv2_invoke(): Promise<_Response<any, any>> {
    return _.request(getVersionDetailsv2_url, getVersionDetailsv2_method, { bodyType: "json" });
}
