/* tslint:disable */
/*--------------------------------------------------------------------------------------------

*  This is an example output of schema2ts
*  Original input is: https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/yaml/uber.yaml
*
*  Generated by:
* 	    schema2ts 0.5.0-beta.5
* 	    Typescript ^2.6.0
*
*  See syntax error in this file?
*       We are working for these features that will break schema2ts, thanks for your waiting
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
export var products_get_url = "/products";
export var products_get_method = "get";
export var estimates_price_get_url = "/estimates/price";
export var estimates_price_get_method = "get";
export var estimates_time_get_url = "/estimates/time";
export var estimates_time_get_method = "get";
export var me_get_url = "/me";
export var me_get_method = "get";
export var history_get_url = "/history";
export var history_get_method = "get";
export type products_get_parameter_query = {
    "latitude": number;
    "longitude": number;
};
export type products_get_result_200 = {
    "product_id"?: string;
    "description"?: string;
    "display_name"?: string;
    "capacity"?: number;
    "image"?: string;
}[];
export type products_get_result_default = {
    "code"?: number;
    "message"?: string;
    "fields"?: string;
};
/** The Products endpoint returns information about the Uber products offered at a given location. The response includes the display name and other details about each product, and lists the products in the proper display order. */
export function products_get(query: products_get_parameter_query): Promise<_Response<200, {
            "product_id"?: string;
            "description"?: string;
            "display_name"?: string;
            "capacity"?: number;
            "image"?: string;
        }[]> | _Response<"default", {
            "code"?: number;
            "message"?: string;
            "fields"?: string;
        }>> {
    return _.request(products_get_url, products_get_method, { query: query, bodyType: "json" });
}
export type estimates_price_get_parameter_query = {
    "start_latitude": number;
    "start_longitude": number;
    "end_latitude": number;
    "end_longitude": number;
};
export type estimates_price_get_result_200 = {
    "product_id"?: string;
    "currency_code"?: string;
    "display_name"?: string;
    "estimate"?: string;
    "low_estimate"?: number;
    "high_estimate"?: number;
    "surge_multiplier"?: number;
}[];
export type estimates_price_get_result_default = {
    "code"?: number;
    "message"?: string;
    "fields"?: string;
};
/** The Price Estimates endpoint returns an estimated price range for each product offered at a given location. The price estimate is provided as a formatted string with the full price range and the localized currency symbol.<br><br>The response also includes low and high estimates, and the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for situations requiring currency conversion. When surge is active for a particular product, its surge_multiplier will be greater than 1, but the price estimate already factors in this multiplier. */
export function estimates_price_get(query: estimates_price_get_parameter_query): Promise<_Response<200, {
            "product_id"?: string;
            "currency_code"?: string;
            "display_name"?: string;
            "estimate"?: string;
            "low_estimate"?: number;
            "high_estimate"?: number;
            "surge_multiplier"?: number;
        }[]> | _Response<"default", {
            "code"?: number;
            "message"?: string;
            "fields"?: string;
        }>> {
    return _.request(estimates_price_get_url, estimates_price_get_method, { query: query, bodyType: "json" });
}
export type estimates_time_get_parameter_query = {
    "start_latitude": number;
    "start_longitude": number;
    "customer_uuid": string;
    "product_id": string;
};
export type estimates_time_get_result_200 = {
    "product_id"?: string;
    "description"?: string;
    "display_name"?: string;
    "capacity"?: number;
    "image"?: string;
}[];
export type estimates_time_get_result_default = {
    "code"?: number;
    "message"?: string;
    "fields"?: string;
};
/** The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs. */
export function estimates_time_get(query: estimates_time_get_parameter_query): Promise<_Response<200, {
            "product_id"?: string;
            "description"?: string;
            "display_name"?: string;
            "capacity"?: number;
            "image"?: string;
        }[]> | _Response<"default", {
            "code"?: number;
            "message"?: string;
            "fields"?: string;
        }>> {
    return _.request(estimates_time_get_url, estimates_time_get_method, { query: query, bodyType: "json" });
}
export type me_get_result_200 = {
    "first_name"?: string;
    "last_name"?: string;
    "email"?: string;
    "picture"?: string;
    "promo_code"?: string;
};
export type me_get_result_default = {
    "code"?: number;
    "message"?: string;
    "fields"?: string;
};
/** The User Profile endpoint returns information about the Uber user that has authorized with the application. */
export function me_get(): Promise<_Response<200, {
            "first_name"?: string;
            "last_name"?: string;
            "email"?: string;
            "picture"?: string;
            "promo_code"?: string;
        }> | _Response<"default", {
            "code"?: number;
            "message"?: string;
            "fields"?: string;
        }>> {
    return _.request(me_get_url, me_get_method, { bodyType: "json" });
}
export type history_get_parameter_query = {
    "offset": number;
    "limit": number;
};
export type history_get_result_200 = {
    "offset"?: number;
    "limit"?: number;
    "count"?: number;
    "history"?: {
        "uuid"?: string;
    }[];
};
export type history_get_result_default = {
    "code"?: number;
    "message"?: string;
    "fields"?: string;
};
/** The User Activity endpoint returns data about a user's lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary. */
export function history_get(query: history_get_parameter_query): Promise<_Response<200, {
            "offset"?: number;
            "limit"?: number;
            "count"?: number;
            "history"?: {
                "uuid"?: string;
            }[];
        }> | _Response<"default", {
            "code"?: number;
            "message"?: string;
            "fields"?: string;
        }>> {
    return _.request(history_get_url, history_get_method, { query: query, bodyType: "json" });
}
