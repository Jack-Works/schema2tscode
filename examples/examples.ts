import cli, { Schema2tsCLI } from '../src/cli'
const OpenAPI2 = [
    'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/yaml/api-with-examples.yaml',
    'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/json/petstore-expanded.json',
    'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/yaml/petstore-minimal.yaml',
    'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/json/petstore-simple.json',
    'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/yaml/petstore-with-external-docs.yaml',
    'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/json/petstore.json',
    'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/yaml/uber.yaml',
    __dirname + '/sources/openapi-2.0-enum.yaml',
]

const commentTemplate = (file: string, dec?: any) => `
*  This is an${dec ? ' declarationsOnly mode' : ''} example output of schema2ts
*  Original input is: ${file}
*
*  Generated by:
* 	    schema2ts %version%
* 	    Typescript %typescript-version%
*
*  See syntax error in this file?
*       We are working for these features that will break schema2ts, thanks for your waiting`

async function run(urls: string[], path: string) {
    for (const url of urls) {
        try {
            const config: Schema2tsCLI = {
                schemas: [url],
                outPath: __dirname + '/' + path,
                customFileComment: commentTemplate(url),
            }
            cli(config)
            cli({ ...config, declaration: true, customFileComment: commentTemplate(url, true) })
        } catch (e) {
            console.error(e)
        }
    }
}
run(OpenAPI2, 'OpenAPI-2.0')

process.on('unhandledRejection', (reason, p) => {
    throw reason
})
