# Collections-Es6

This module provides functionality of Collections Framework of ES6 such as 
Map, Set, WeakMap, WeakSet in native ES5 for older browsers and JavaScript engines.

## Usage

It creates an object `ES6` on global object(window in browser or global in NodeJS). `ES6` object provides
some utility methods, these may not be standard in ES6.

```javascript

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

* For browser, just include this script on top of any other scripts
* In NodeJS environment install it from NPM,

    `npm install --save collections-es6`
    
## Testing
    
    `npm test`

## Dependency

It requires the [symbol-es6](https://github.com/ariyankhan/symbol-es6) module, 
just include it before [collections-es6](https://github.com/ariyankhan/https://github.com/ariyankhan/collections-es6) module.


## Contributors

* [Ariyan Khan]https://github.com/ariyankhan)

## License

MIT License

Copyright (c) 2017 Ariyan Khan

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

