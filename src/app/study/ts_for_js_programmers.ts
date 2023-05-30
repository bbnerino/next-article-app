type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectArray = Array<{ name: string }>;

interface SomeArray<T> {
  [index: number]: T;
}

let arr: SomeArray<string> = ["a", "b", "c"];
let arr2: SomeArray<number> = [1, 2, 3];
let arr3: SomeArray<{ name: string }> = [{ name: "a" }, { name: "b" }];

interface Backpack<T> {
  add: (obj: T) => void;
  get: (obj: T) => T;
}
let backpack: Backpack<string> = {
  add: function (obj: string) {},
  get: function () {
    return "";
  },
};

let numpack: Backpack<number> = {
  add: function (obj: number) {},
  get: function (obj: number) {
    return obj * 2;
  },
};

backpack.add("hello");

interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26, z: 90, d: 23 };
printPoint(point);

class Empty {}
function fn(arg: Empty) {
  // ...
}

fn({ k: 10 });

class Car {
  drive() {}
  swim() {}
}

class Golfer {
  drive() {}
  swim() {}
  swing() {}
}

let w: Car = new Golfer();

let fst: (a: any, d: any) => any = (a, d) => a;
// 또는 좀 더 정확하게 말하자면:
let snd: <T, U>(a: T, d: U) => U = (a, d) => d;

const anys = [];
anys.push(1);
anys.push("string");
anys.push(false);

interface Person {
  name: "left" | "right";
}
const a = "left";
let b: Person = { name: a };
let c = "left";
// let d: Person = { name: c };

let e: "left" | "right" = "left";
let f: Person = { name: e };

declare function map<T, U>(f: (x: T) => U, xs: T[]): U[];

// declare 란? 이 함수가 어떤 타입을 반환하는지 알려주는 것이다.
// 이렇게 하면 map 함수가 어떤 타입을 반환하는지 알 수 있다.

declare module "hi"{
  // 이 모듈은 어떤 타입을 반환하는지 알려주는 것이다.

  global{
    
  }
}