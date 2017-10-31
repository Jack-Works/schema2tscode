/* tslint:disable */
/**
 * This file is generated by schema2ts
 * DO NOT modify it directly
 */
export interface PlainObject<T> { [key: string]: T }
export abstract class Helper {
    protected fetch: typeof fetch = (x, y) => fetch(x, y)
    protected _getJSON(o: string): any {
        try {
            return JSON.parse(o)
        } catch {
            return o
        }
    }
    protected _getQueryString(params: PlainObject<any>): string {
        const esc = encodeURIComponent
        const cloned = { ...params }
        for (const i in cloned) {
            if (cloned[i] === undefined) { delete cloned[i] }
        }
        return Object.keys(cloned).map((k) => esc(k) + '=' + esc(cloned[k])).join('&')
    }
    protected Error = (data: any, response: Response): never => { throw { data, response } }
    protected _createFetchInit(
        url: string,
        init: RequestInit,
        query?: PlainObject<any>,
        bodyParams?: any,
        pathParams?: { [key: string]: string | number },
    ): [string, RequestInit] {
        const method = (init.method || 'GET').toUpperCase()
        if (pathParams) {
            for (const key in pathParams) {
                const obj = pathParams[key]
                url = url.replace(`{${key}}`, obj.toString())
            }
        }
        if (query) {
            url = url + '?' + this._getQueryString(query)
        }
        if (bodyParams) {
            init.headers = {
                'Content-type': 'application/json',
                ...(init.headers || {}),
            }
            init.body = JSON.stringify(bodyParams)
        }
        return [url, init]
    }
    protected async _return<T>(response: Promise<Response>)
        : Promise<T & { __response__: Response }> {
        const res = await response
        const text = await res.text()
        if (!res.ok) { this.Error(this._getJSON(text), res) }

        const obj = this._getJSON(text)
        Object.defineProperty(obj, '__response__', { value: res })
        return obj
    }

    protected __<T = void>(
        _url: string, method: string, pathParams?: PlainObject<any>,
        query?: PlainObject<any>, bodyParams?: any,
    ) {
        const [url, init] = this._createFetchInit(
            _url,
            { method },
            query || {},
            bodyParams,
            pathParams,
        )
        return this._return<T>(this.fetch(url, init))
    }
}


export namespace API {
    // Interfaces will inject here
}
export default abstract class API extends Helper {
    // Code here
}
