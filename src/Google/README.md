## How to generate `Sdk.js`, `Sdk.d.ts`

### Prerequisite
* [protobufjs](https://www.npmjs.com/package/protobufjs)

### Steps

1. Get `sdk.proto` from https://github.com/dplusic/GameLift-Server-Protobuf/releases
1. `pbjs -t static-module -w commonjs -o Sdk.js --force-long sdk.proto`
1. `pbts -o Sdk.d.ts Sdk.js`
