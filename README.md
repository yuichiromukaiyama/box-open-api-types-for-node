# box open api types for node

"box open api types for node" is an open-source repository that provides type information for Box cloud storage service's official API specifically tailored for Node.js.

This repository ensures that Node.js developers have access to accurate type information when using Box's official API. The type information includes API endpoints, request and response parameters, object and field structures, and other necessary type definitions for each API component.

By utilizing this repository, Node.js developers can leverage the benefits of IDE auto-completion and static type checking when integrating Box's API into their development projects. This enables easier verification of correct parameters and data types during API calls, leading to improved development efficiency and prevention of potential bugs.

## Usage

Copy the `box-openapi-client` folder and paste it into your development project.
Click [here](./examples/common.ts) for an example of using a mold.

## Retrieving the latest openapi.json

Please follow these steps to obtain.

```shell
git clone https://github.com/box/box-openapi.git
cd box-openapi
nvm use 16
yarn
yarn run build
```

The above procedure will generate the following directories on the relevant project.

`/compiled/openapi/openapi.json`
