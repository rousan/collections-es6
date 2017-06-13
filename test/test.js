

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
