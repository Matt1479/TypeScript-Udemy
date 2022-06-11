// Array

const arr: Array<number> = [];
const arr1: number[] = [];

// last

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);

const l2 = last<string>(["a", "b", "c"]);

//////

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y]; // returns tuple [x, y];
};

const v = makeArr(5, 6); // [number, number]
const v2 = makeArr("a", "b"); // [string, string]
const v3 = makeArr("a", 5); // [string, number]
const v5 = makeArr<string | null, number>(null, 5); // [string | null, number]

// Y = number, setting default value
// Y = any, default value if none is specified
// const makeArr1 = <X, Y = number>(x: X, y: Y): [X, Y] => {
//     return [x, y]; // returns tuple [x, y];
//   };

//   const vv = makeArr1(5, 6); // number[]
//   const vv2 = makeArr1("a", "b"); // string[]
//   const vv3 = makeArr1("a", 5); // [string, number]
//   const vv5 = makeArr1<string | null>(null, 5); // [string, number]

// extending types

// const makeFullName = (obj: { firstName: string; lastName: string }) => {}

// interface Person {
//     firstName: string;
//     lastName: string;
// }
// const makeFullName = <T extends Person>(obj: T) => {}

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const v4 = makeFullName({ firstName: "Bob", lastName: "Junior", age: 15 });
// const v5 = makeFullName({ another: "Bob", lastName: "Junior", age: 15 });
// another property doesn't exist...

// Generics with Interfaces

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;

// equivalent to that:
type NumberTab1 = {
  id: string;
  position: number;
  data: number;
};

// you basically insert the number type where that T value is

type StringTab = Tab<string>;

////////

// playing around with it...

interface Test<T, Y, U, I> {
  id: T;
  position: Y;
  date: U; // register date or w/e
  isAdmin: I;
}

type NewType = Test<number, string, string, boolean>;

const user: NewType = {
  id: 0,
  position: "User",
  date: "5/21/2022",
  isAdmin: false,
};

//////

interface Test1<T, Y> {
  id: number;
  position: T;
  date: Y;
  isAdmin: boolean;
}

type NewType1 = Test1<string, number>;

const user1: NewType1 = {
  id: 1,
  position: "Admin",
  date: 1653131495, // Unix
  isAdmin: true,
};
