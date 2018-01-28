[![NPM version](https://img.shields.io/npm/v/collections-es6.svg)](https://www.npmjs.com/package/collections-es6)
[![NPM total downloads](https://img.shields.io/npm/dt/collections-es6.svg)](https://www.npmjs.com/package/collections-es6)
[![License](https://img.shields.io/github/license/rousan/collections-es6.svg)](https://github.com/rousan/collections-es6/blob/master/LICENSE)

# Collections-ES6

Provides support for `ES6` `Map`, `Set`, `WeakMap` and `WeakSet` in `ES5` for older JS environments i.e. older browsers or `NodeJS`.

> ES6 Map, Set, WeakMap and WeakSet polyfill in pure ES5.

## Install

It depends on [symbol-es6](https://github.com/rousan/symbol-es6) module, so you need to include both.

### NPM

Install it from `npm` and `require` it before any other modules:

```bash
$ npm install --save collections-es6
```

```javascript
require("symbol-es6");
require("collections-es6");
```

### CDN

If you prefer CDN, then just insert it into your HTML page on the top of other scripts:

```html
<script src="https://cdn.jsdelivr.net/npm/symbol-es6/dist/symbol-es6.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/collections-es6/dist/collections-es6.min.js"></script>
```

## Examples

```javascript
"use strict";

var ES6 = require("symbol-es6");
ES6 = require("collections-es6");


var map = new Map([[1, 2], ["Hi", "Hello World"]]);

console.log(map.has(1)); //true
console.log(map.has("Hi")); //true

map.set(NaN, "NaN");
map.set(NaN, "Again NaN!");
map.set(0, "Zero");
map.set(-0, "Again Zero!");

console.log(map.size); //4
console.log(map.has(NaN)); //true
console.log(map.size); //4
console.log(map.has(0)); //true
console.log(map.has(-0)); //true

var set = new Set([NaN, 0, -0, "Hi", "Hello World"]);
set.add(Infinity);

console.log(set.has(NaN)); //true
console.log(set.has("Hi")); //true
console.log(set.size); //5
console.log(set.has(Infinity)); //true
console.log(set.has(-Infinity)); //false

var wm = new WeakMap();
wm.set(Object, "object");
wm.set(Function, "function");
wm.set({}, "new Object");

console.log(wm.has(Object)); //true
console.log(wm.has({})); //false

var ws = new WeakSet();
ws.add(Function);
ws.add({});

console.log(ws.has({})); //false
console.log(ws.has(Function)); //true

console.log(ES6.isMap(map)); //true
console.log(ES6.isSet(set)); //true
console.log(ES6.isWeakMap(wm)); //true
console.log(ES6.isWeakSet(ws)); //true
```

## Polyfills

* `Map`

    * `Map.prototype.size`
    * `Map.prototype.set()`
    * `Map.prototype.get()`
    * `Map.prototype.has()`
    * `Map.prototype.clear()`
    * `Map.prototype.delete()`
    * `Map.prototype.entries()`
    * `Map.prototype.forEach()`
    * `Map.prototype.keys()`
    * `Map.prototype.values()`
    * `Map.prototype[@@iterator]()`
    * `Map.prototype[@@toStringTag]()`
    
* `Set`
    * `Set.prototype.size`
    * `Set.prototype.add()`
    * `Set.prototype.clear()`
    * `Set.prototype.delete()`
    * `Set.prototype.entries()`
    * `Set.prototype.forEach()`
    * `Set.prototype.has()`
    * `Set.prototype.keys()`
    * `Set.prototype.values()`
    * `Set.prototype[@@iterator]()`
    * `Set.prototype[@@toStringTag]()`
    
* `WeakMap`

    * `WeakMap.prototype.delete()`
    * `WeakMap.prototype.get()`
    * `WeakMap.prototype.has()`
    * `WeakMap.prototype.set()`
    * `WeakMap.prototype[@@toStringTag]()`
    
* `WeakSet`

    * `WeakSet.prototype.add()`
    * `WeakSet.prototype.delete()`
    * `WeakSet.prototype.has()`
    * `WeakSet.prototype[@@toStringTag]()`
