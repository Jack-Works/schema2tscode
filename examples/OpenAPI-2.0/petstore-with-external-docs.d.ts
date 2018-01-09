/* tslint:disable */
/*--------------------------------------------------------------------------------------------

*  This is an declarationsOnly mode example output of schema2ts
*  Original input is: https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/yaml/petstore-with-external-docs.yaml
*
*  Generated by:
* 	    schema2ts 0.5.0-beta.5
* 	    Typescript ^2.6.0
*
*  See syntax error in this file?
*       We are working for these features that will break schema2ts, thanks for your waiting
*--------------------------------------------------------------------------------------------*/
import { AxiosInstance } from "axios";
export interface _Response<Status, Data> {
    data: Data;
    status: Status;
    statusText: string;
    headers: any;
    request?: any;
}
export declare const _: {
    lib: AxiosInstance;
    removeEmpty(obj: any): any;
    getPathParam(url: string, params: any): string;
    request(url: string, method: string, {query, body, path, headers, bodyType}: {
        query?: any;
        body?: any;
        path?: any;
        headers?: any;
        bodyType?: "json" | "form";
    }): Promise<{
        data: any;
        headers: any;
        request: any;
        status: any;
        statusText: string;
    }>;
};
export declare var findPets_url: string;
export declare var findPets_method: string;
export declare var addPet_url: string;
export declare var addPet_method: string;
export declare var findPetById_url: string;
export declare var findPetById_method: string;
export declare var deletePet_url: string;
export declare var deletePet_method: string;
export interface findPets_parameter_query {
    /** tags to filter by */ "tags": string[];
    /** maximum number of results to return */ "limit": number;
}
export interface NewPet {
    "name": string;
    "tag"?: string;
}
export declare type Pet = NewPet & {
    "id": number;
};
export interface ErrorModel {
    "code": number;
    "message": string;
}
/** Returns all pets from the system that the user has access to */
export declare function findPets(query: findPets_parameter_query): Promise<_Response<200, Pet[]> | _Response<"default", ErrorModel>>;
/** Creates a new pet in the store.  Duplicates are allowed */
export declare function addPet(body: NewPet): Promise<_Response<200, Pet> | _Response<"default", ErrorModel>>;
export interface findPetById_parameter_path {
    /** ID of pet to fetch */ "id": number;
}
/** Returns a user based on a single ID, if the user does not have access to the pet */
export declare function findPetById(path: findPetById_parameter_path): Promise<_Response<200, Pet> | _Response<"default", ErrorModel>>;
export interface deletePet_parameter_path {
    /** ID of pet to delete */ "id": number;
}
/** deletes a single pet based on the ID supplied */
export declare function deletePet(path: deletePet_parameter_path): Promise<_Response<"default", ErrorModel>>;
