# jsDOE

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Design of experiments for JavaScript.


## Installation

`$ npm i jsDOE`

## Usage

```js
import {classicHypercube, fullFactorial} from 'js-doe'

classicHypercube(3, 4, '42');
// result is an array of design points 

fullFactorial([2,4,3])
// the result is an array of design point
```

## [API Documentation](https://cheminfo.github.io/jsDOE/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/jsDOE.svg
[npm-url]: https://www.npmjs.com/package/jsDOE
[ci-image]: https://github.com/cheminfo/jsDOE/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/cheminfo/jsDOE/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/jsDOE.svg
[codecov-url]: https://codecov.io/gh/cheminfo/jsDOE
[download-image]: https://img.shields.io/npm/dm/jsDOE.svg
[download-url]: https://www.npmjs.com/package/jsDOE
