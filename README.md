# Collections-ES6

This module provides functionality of Collections Framework of ES6 such as 
Map, Set, WeakMap, WeakSet in native ES5 for older browsers and JavaScript engines.
To get full implementations of ES6 in ES5, install [es6-harmony](https://github.com/ariyankhan/es6-harmony) module. 

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
    

## Usage

It creates an object `ES6` on the global object(window in browser or global in NodeJS). `ES6` object provides
some utility methods.

```javascript
"use strict";

require("symbol-es6");
require("collections-es6");

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

## Install

* For browser, just include this script on top of the other scripts
* In NodeJS environment install it from NPM,

    `npm install --save collections-es6`
    
## Testing
    
   `npm test`

## Dependency

It requires the [symbol-es6](https://github.com/ariyankhan/symbol-es6) module, so
just include it before [collections-es6](https://github.com/ariyankhan/https://github.com/ariyankhan/collections-es6) module
in browser or install it from npm for NodeJS.

  `npm install --save symbol-es6` 

## Contributors

* [Rousan Ali](https://github.com/ariyankhan)

## License

MIT License  

Copyright (c) 2017 Rousan Ali

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.

