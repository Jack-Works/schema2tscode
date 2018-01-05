<h2 align="center">Schema2ts</h2>

<p align="center">
  <a href="https://travis-ci.org/Jack-Works/schema2tscode">
    <img alt="Travis" src="https://img.shields.io/travis/Jack-Works/schema2tscode.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/schema2ts">
    <img alt="npm version" src="https://img.shields.io/npm/v/schema2ts.svg?style=flat-square">
  </a>
  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
</p>

Schema2ts is developed to generate Typescript code from REST API schema.

## Command Line usage

> Syntax: schema2ts [options][file ...]

```
Options:
    -h, --help                   Print this message.
    --template FILE/URL          Template of the generated files.
    --tsx                        Generates '.tsx' file (or .d.tsx if -d is on).
    -d, --declaration            Generates corresponding '.d.ts' file.
    -o, --out FILE               Generates file to someplace.
    --outPath DIRECTORY          Generates file to the directory.
    --noEmit                     Do not emit outputs.
```

## API Usage

API is in development.

## Q&A

### Supported schema type?

* [OpenAPI 2.0](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md)

### What does it generate?

We have some examples in the [./examples](./examples) folder.
