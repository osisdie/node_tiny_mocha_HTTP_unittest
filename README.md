### node_tiny_mocha_HTTP_unittest
---
Node application to parse config file as requests. Only 1 for loop to fulfill a test scenario. Hope help myself and any developer use it as a template for any advanced use.

*series of code_for_fun*

### Requirements
---
Node.js 8.0 or greater

### Installation
---
After clone, install all dependencies
```sh
$ npm install
```
Install BDD test framework: **mocha**
```sh
$ npm install --global mocha
```
* or as a development dependency for your project:
```sh
$ npm install --save-dev mocha
```
  * Mocha currently requires Node.js v6.x or newer.

### Configuration
---
**default**: config/config.json

```

### Unit Test
```sh
$ npm test ./test/http_test.js
# or
$ mocha ./test/http_test.js
```
