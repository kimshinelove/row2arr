#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> read row to arr module


## Install

```sh
$ npm install --save row2arr
```


## Usage

### readRow2Arr

```js
var row2arr = require('row2arr');

row2arr.readRow2Arr(file, function (err, arr) {
        console.log(arr);
})
```

### readRow2ArrSync

```js
var row2arr = require('row2arr');

var arr = row2arr.readRow2ArrSync(file);

console.log(arr);
```



## License

MIT © [JiTae, Kim]()


[npm-image]: https://badge.fury.io/js/row2arr.svg
[npm-url]: https://npmjs.org/package/row2arr
[travis-image]: https://travis-ci.org/kimshinelove/row2arr.svg?branch=master
[travis-url]: https://travis-ci.org/kimshinelove/row2arr
[daviddm-image]: https://david-dm.org/kimshinelove/row2arr.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kimshinelove/row2arr
