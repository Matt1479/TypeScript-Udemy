# TypeScript-Udemy Notes

## **Section 01: Getting Started** <span id="top01"></span>

<br><br>

1. <a href="#a0100">What is TypeScript?</a>
2. <a href="#a0101">Project setup for future sections</a>

<br><br>

### What is TypeScript? <span id="a0100"></span><a href="#top01">&#8593;</a>

**TypeScript** is a JavaScript Superset meaning it's built on top of JavaScript.

TypeScript adds new Features + Advantages to JavaScript

TypeScript is being compiled to JavaScript with all those new features and advantages. The compiler doesn't add anything new, anything that doesn't exist in JavaScript, it just creates a more complex JavaScript code that you'd have to write yourself.

The biggest advantage of TypeScript is that it has types. Meaning you can write better code with smaller chance of making an error. It's also much easier to debug (it gives you extra live error checking).

in summary:

Advantages of TypeScript:

    - Types
    - Easier finding errors during development
    - You can use better IDEs
    - You can use Next-gen JavaScript Features (compiled down for older Browsers)
    - Non-JavaScript Features like Interfaces or Generics
    - Meta-Programming Features like Decorators
    - Rich Configuration Options
    - Modern Tooling that helps even in non-TypeScript Projects

Metaprogramming is a programming technique in which computer programs have the ability to treat other programs as their data. It means that a program can be designed to read, generate, analyze or transform other programs, and even modify itself while running.

Add an exclamation mark to let TypeScript know that this is a element, that will never yield NULL

<br>

### **Project setup for future sections** <span id="a0101"></span><a href="#top01">&#8593;</a>

Installing lite server:

npm init

npm install --save-dev lite-server

Then add this to package.json: "start": "lite-server"

npm start

It works the same as Live Server

Compile the .ts file: tsc file.ts

<br><br>

<hr>

<br><br>

## **Section 02: TypeScript Basics & Basic Types** <span id="top02"></span>

<br><br>

1. <a href="#a0200">Core Types</a>
2. <a href="#a0201">Object Types</a>
3. <a href="#a0202">Array Types</a>
4. <a href="#a0203">Type Tuple, Enum, Any</a>
5. <a href="#a0204">Union Types</a>
6. <a href="#a0205">Literal Types</a>
7. <a href="#a0206">Type Aliases / Custom Types</a>
8. <a href="#a0207">Function Return Types & "void"</a>
9. <a href="#a0208">Functions as types</a>
10. <a href="#a0209">Functions types and callbacks</a>
11. <a href="#a0210">The "unknown" type</a>
12. <a href="#a0211">The "never" type</a>

<br><br>

### **Core Types** <span id="a0200"></span><a href="#top02">&#8593;</a>

#### Type **number**

[ 1, 5.3, -10, etc ]

All numbers, no differentation between integers or floats.

#### Type **string**

[ 'Hi', "Hi", \`Hi\` ]

All text values

The \`\` quotes (backticks) are used for template literals

#### Type **boolean**

[ true, false ]

These are not the "truthy" or "falsy" values

**Truthy and Falsy in JavaScript**

Boolean-ish

Falsy/Falsey: null, undefined, 0, false, '', "", NaN

Truthy: every number other than 0 unless it's defined as falsy.

<br>

**TypeScript Types vs JavaScript Types**

`typeof` operator

JavaScript uses 'dynamic types' (resolved at runtime), TypeScript uses 'static types' (set during development).

You only get the support during development. Not during the runtime.

<br>

**Important: Type Casting**

The core primitive types in TypeScript are all lowercase: string, number, etc and NOT String, Number, etc.

<br>

**Working with Numbers, Strings & Booleans**

**Type Assignment & Type Interference**

Type Assignment = you assign types explicitly (`num1: number, str1: string`, etc)

Type Inference = TypeScript automatically assigns types e.g.: `let x = 5;` will be type of number

<br>

Don't assign a type if it can be infered by TypeScript.

<br>

**Object Types** <span id="a0201"></span><a href="#top02">&#8593;</a>

#### Type **object**

```ts
{ property: value }

// e.g.:
{
  name: 'Mark'
  age: 30,
}
```

Any JavaScript object, more specific object types are possible.

A TypeScript object can have the same type as his properties and methods.

<br>

Assigning an object type (explicitly) to a constant:

```typescript
const person: {
  name: string;
  age: number;
} = {
  name: "Mark",
  age: 24,
};
```

But it's better to let TypeScript infer the type:

```typescript
const person = {
  name: "Mark",
  age: 24,
};
```

**Nested Object & Types**

Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

```typescript
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
```

This would be the type of such an object:

```typescript
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```

So you have an object type in an object type so to say.

<br>
<br>

**Array Types** <span id="a0202"></span><a href="#top02">&#8593;</a>

#### Type **array**

```ts
[1, 2, 3]

['a', 'b', 'c']
```

Any JavaScript array, type can be flexible or strict (regarding the element types)

Declaring a string array:
```
ts let strArr: string[];
```

<br>

<a href="https://www.w3schools.com/jsref/jsref_map.asp">map()</a> JavaScript method:

`map()` creates a new array from calling a function for every array element.

`map()` calls a function once for each element in an array.

`map()` does not execute the function for empty elements.

`map()` does not change the original array.

<br>

**Working with Tuples** <span id="a0203"></span><a href="#top02">&#8593;</a>

#### Type tuple

```ts
const tupleArr = [1, 2] // fixed type (number) & fixed length (2 elements)
```

Tuple type is a fixed type array with fixed length

<br>

Added by TypeScript: Fixed-length array with a fixed type

Tuple is good to use when you have exactly x amount of elements in an array and you know the type of each value in advance. In that case you should use tuple type instead of an array since it adds more strictness into the app.

For example you could limit it to 2 elements, where first element would be of type `number`, second element of type `string`:

```ts
const mixedTupleArr = [1, 'abc'];
```

<br>

#### type enum

enum `{ NEW, OLD }`

Added by TypeScript: Automatically enumerated global **constant** identifiers

example of enum syntax: `enum Role { ADMIN, READ_ONLY, AUTHOR }` (index: ADMIN = 0, READ_ONLY = 1, etc)

<br>

#### type any

[ * ]

Any kind of value, no specific type assignment

Avoid this type at all costs. 

<br><br>

**Union Types** <span id="a0204"></span><a href="#top02">&#8593;</a>

sample syntax:

```ts
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
```

<br><br>

**Literal Types** <span id="a0205"></span><a href="#top02">&#8593;</a>

Exact value, like `const number2 = 2.8;`, so it's not just a number, but a specific number

or `const stringLiteral = 'some string value';`

Adding a + in front of each variable converts it into a number type:
```ts
return +num1 + +num2; // those variables are going to be a type of number
```

<br><br>

**Type Aliases / Custom Types** <span id="a0206"></span><a href="#top02">&#8593;</a>

With Aliases you can create your own types:
```ts
type Combinable = number | string;
```
(and any type setup, including literal types, object types, any kind of types, though do not mix primitives with referece types)

It could save some extra code.

<br><br>

**Type Aliases & Object Types**

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type. For example:

```ts
type User = { name: string; age: number };
const u1: User = { name: 'Mark', age: 30 }; // this works!
```

This allows you to avoid unnecessary repetition and manage types centrally.

For example you can simplify this code:

```ts
function greet(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

To:

```ts
type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

<br>

**Function Return Types & "void"** <span id="a0207"></span><a href="#top02">&#8593;</a>

function return types:

```ts
// explicitly assigning function return type (): number
function add(n1: number, n2: number): number {
  return n1 + n2;
}
```

void-type function (which is called a procedure - a function that doesn't have a `return` keyword):

```ts
// explicitly assigning a void type, normally TypeScript would infer that type
function printResult(num: number): void {
  console.log("Result: " + num);
}
```

<br><br>

**Functions as Types** <span id="a0208"></span><a href="#top02">&#8593;</a>

```ts
// assigning add() function to this variable/constant
combineValues = add;

console.log(combineValues(8, 8));
```

You can store a pointer to a function inside a variable.

<br>

Assigning Function Type(but without typing):

```ts
let combineValues: Function;
```

<br>

Assigning a Function Type with Typing:

```ts
let combineValues: (a: number, b: number) => number;
```

Now `combineValues` should accept any function that takes 2 parameters where each parameter is a number and where the function overall then returns a number.

```ts
combineValues = add;
combineValues = printResult; // this will throw an error since it already has a function assigned to it
```

<br><br>

**Function Types & Callbacks** <span id="a0209"></span><a href="#top02">&#8593;</a>

(A JavaScript callback is a function which is going to be executed after another function has finished execution)

Let's create this function:

```ts
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result); // cb == callback
}
```

And call this function:

```ts
addAndHandle(10, 20, (result) => {
  console.log(result);
});
```

In that case parameters are enforced and the return type isn't (since it's a void type).

<br>

Callback functions can return something even if the argument on which they're passed does not expect a returned value.

<br>
<br>

**The "unknown" type** <span id="a0210"></span><a href="#top02">&#8593;</a>

```ts
let userInput: unknown;
```

`unknown` type is different to `any` type,
it's better to use `unknown` type over `any` type, because you atleast have _some_ type checking

for example, in this case we don't know if the userInput is going to be string or a number, so we assign a `unknown` type:

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Bob';

// this needs extra type checking, otherwise it'll throw an error
if (typeof userInput === `string`) {
  userName = userInput;
}
```

So `unknown` shouldn't be really used, but it's better than type `any`. Usually you'd just use `Union type` or `Alias type`.

<br><br>

**The "never" Type** <span id="a0211"></span><a href="#top02">&#8593;</a>

The "never" function type never returns any values:

```ts
function generateError(message: string, code: number): never {
  throw { errorMessage: message, errorCode: code };
}

generateError("An error occured", 500);
```

Having utility functions like this can be pretty useful in bigger applications, where you wouldn't manually throw an error in 10 different places of your app, but where you want to reach out to one convenient function that builds the error object. So you can call this function with different inputs whenever you'd want to throw an error.

<br><br>

<hr>

<br><br>

## **Section 03: The TypeScript Compiler (and its Configuration)** <span id="top03"></span>

<br>

1. <a href="#a0300">Watch mode & compilation targets</a>
2. <a href="#a0301">Including & Excluding Files</a>
3. <a href="#a0302">Setting a Compilation Target</a>
4. <a href="#a0303">Strict options</a>
5. <a href="#a0304">Code Quality Options </a>
6. <a href="#a0305">Debugging with Visual Studio Code</a>
7. <a href="#a0306">Useful Resources & Links </a>

<br><br>

**Module Introduction**

### **Using "Watch Mode"** <span id="a0300"></span><a href="#top03">&#8593;</a>

`tsc app.ts -w`

or

`tsc app.ts --watch`

Don't quit this watch mode process whilst developing. You can quit thereafter via `CTRL + C`.

## **Compiling the Entire Project / Multiple Files**

First initialize TypeScript project: `tsc --init`

Now type (into the bash): `tsc`

Or use watch mode: `tsc -w`

<br>

JavaScript modules

JavaScript module is a code from another file that was exported.
This allows other files to use `import {}` statement to import this file as a dependency(3rd party code that your app needs)

So a module is a file that exports some code (it's own code)

Modules:

Name Export: `export const name = 'value'` --> Name Import: `import { name } from '...'`

check this <a href="https://www.samanthaming.com/tidbits/79-module-cheatsheet/">Module Cheatsheet</a>

The export is "tree shakable" which means you only import what you need, shake off the rest.

consumer looks like this: `import { someFeature } from './package';`

<br>

Array Map

Create a new **Array[]**,

by calling a **function** on each element in a different **Array[]**

In other words it's just a loop where the goal of that loop is to create a new array (whose values could be changed).

<br>
<br>

### **Including & Excluding Files** <span id="a0301"></span><a href="#top03">&#8593;</a>

Exclude files in the `tsconfig.json` file:

```ts
  "exclude": [
    "filename.ts"
  ]
```

you can use wildcards:

```ts
  "exclude": [
    "*.dev.ts"
  ]
```

Include files in the `tsconfig.json` file:

```ts
"include": [
  "app.ts",
  "someFolder"
]
```

Include individual files:

```ts
"files": [
  "someFile.ts"
]
```

### **Setting a Compilation Target** <span id="a0302"></span><a href="#top03">&#8593;</a>

In the `"compilerOptions: {}"` (in the tsconfig.json) file we can set up how our TypeScript code is compiled. So not only which files are going to be compiled, but also how the files that are going to be compiled are treated by TypeScript.

**`"target"`**: which JS version you want to compile the code into.

("es5" == var)
("es6+" == let, const etc)

The newer the version is the better the code is (more concise).

<br>

**`"lib"`**: library files (for example you use es5 and want some es6 features(API))

for example:

```ts
"lib": [
  "dom",
  "es6",
  "dom.iterable",
  "scripthost"
]
```

<br>

**`"allowJs"`**: Include JavaScript files in the compilation

**`"checkJs"`**: Check for errors in JS files

This could be useful if you for example want to use JS only, but you want some TypeScript features.

<br>

**`"declaration/declarationMap"`**: creating your own library files

<br>

**`"sourceMap: true"`**: add .ts files to source-list (in the browser) - helps with debugging.

<br>

dist folder == output folders (e.g. JS files)
src folder == (e.g. TypeScript files)

**`"rootDir"`**: Here are the files that are going to be compiled (src folder / TS files)

**`"outDir"`**: Here the created files are stored (dist folder/JS files)

<br>

**`"removeComments: true"`**: this will remove all the comments in the JS file

<br>

**`"noEmit: true"`**: prevent creating JS files

<br>

**`"downlevelIteration: true"`**: uncomment this if your code is working differently after compiling (the loops).

<br>

**`"noEmitOnError"`**: true - stop emitting files on compilation errors

<br>
<br>

#### **Strict options** <span id="a0303"></span><a href="#top03">&#8593;</a>

**`"strict: true"`**: sets all the strict options to true

**`"noImplicitAny"`**: ensures that we have to be clear about parameters/values that we're working with in our code.

**`"strictNullChecks"`**: allow potentially null falues (if you set it to false)

**`"strictBindCallApply"`**: it helps working with the `call()`, `bind()`, `apply()` methods (easier error finding)

**`"strictPropertyInitialization"`** & **`"strictFunctionTypes"`** is useful for working with classes and objects and so on.

**`"alwaysStrict"`**: always use strict in JS files (if set to true)

<br>

#### **Code Quality Options** <span id="a0304"></span><a href="#top03">&#8593;</a>

Additional checks

`noUnused(Locals/Parameters)`: TS is gonna throw an error if you have unused variables, paramters etc.

`noImplicitReturns`: TS is gonna throw an error if for example a function should return something, but it doesn't return anything.

<br>

SourceMapOptions: extra file options (rootDir, outDir), typically you leave it as it is.

For more check the <a href="https://www.typescriptlang.org/docs/handbook/intro.html">documentation</a>

<br>

**Debugging with Visual Studio Code** <span id="a0305"></span><a href="#top03">&#8593;</a>

Start debugging inside of VS Code:

<br>

F5

or

CTRL + SHIFT + D

<br><br>

#### **Useful Resources & Links** <span id="a0306"></span><a href="#top03">&#8593;</a>

Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.

These links might also be interesting:

<a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html">tsconfig Docs</a>

<a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html">Compiler Config Docs</a>

<a href="https://code.visualstudio.com/docs/typescript/typescript-debugging">VS Code TS Debugging</a>

<br><br>

<hr>

<br><br>

## **Section 04: Next-generation JavaScript and TypeScript** <span id="top04"></span>

<br>

1. <a href="#a0400">Arrow Functions</a>
2. <a href="#a0401">The Spread Operator</a>
3. <a href="#a0402">Rest Parameters</a>
4. <a href="#a0403">Copying Arrays</a>
5. <a href="#a0404">Copying Objects</a>
6. <a href="#a0405">Array & Object Destructing</a>

<br><br>

<a href="https://kangax.github.io/compat-table/es6/">Supported JS/TS features in different browsers.</a>

<br>

### **Arrow Functions** <span id="a0400"></span><a href="#top04">&#8593;</a>

The syntax:

```ts
const add = (a: number, b: number) => {
  return a + b;
};
```

<br>

**Default Function Parameters**

set default function parameters last.

<br>

#### **The Spread Operator** <span id="a0401"></span><a href="#top04">&#8593;</a>

```ts
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// you can also copy values when creating a new arrays:
const activeHobbies = ["Hiking", ...hobbies]; // this will push "Sports" and "Cooking" into that array

// .. or you can push items into an existing array using the spread operator
activeHobbies.push(...hobbies); // ... - spread operator

// console.log(activeHobbies)) result:
Array(3) [ "Hiking", "Sports", "Cooking" ]
​
0: "Hiking"
​
1: "Sports"
​
2: "Cooking"
​
length: 3
​
<prototype>: Array []
```

Spread will **pull out** all the elements off an array and add them as a **list of individial values** in the place where you used that operator (here as a list of values to push()).

So whenever you need a comma separated list of values, you can use spread operator (...) with an array.

<br>

**Using spread operator to copy objects**

```ts
const person = {
  name: "Mark",
  age: 28,
};

// copying the person object
const copiedPerson = { ...person };
```

So what it does is it pulls out all the values (copies them) and puts them into the new constant.

<br>

### **Rest Parameters** <span id="a0402"></span><a href="#top04">&#8593;</a>

```ts
// rest operator - flexible functions

const add = (...numbers: number[]) => {
  let result = 0;
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// the spread operator (...numbers: number[]) will merge all incoming parameters / list of values into an array

// reduce() method: performs operation on every element of an array,
// returns a result and then adds this results together.
```

Rest operator is useful for accepting an unlimited amount of arguments.

<br>
<br>

<a href="https://academind.com/tutorials/reference-vs-primitive-values">Reference vs Primitive values</a>

<br>

### Copying **Arrays**: <span id="a0403"></span><a href="#top04">&#8593;</a>

1. the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">`slice()`</a> method:

```ts
let hobbies = ["Sports", "Cooking"];
let copiedHobbies = hobbies.slice();
```

It basically returns a new array which contains all elements of the other array, starting at the starting index you passed (and then up to the max number of elements you defined). If you just call **`slice()`** method, without arguments, **you get a new array with all elements of the other array**.

<br>

2. The <a href="https://developer.mozilla.org/en-US/docs/web/javascript/reference/operators/spread_syntax">spread</a> operator (...)

If you're using ES6+, you can use the spread operator.

```ts
let hobbies = ["Sports", "Cooking"];
let copiedHobbies = [...hobbies];
```

<br>

### Copying **Objects**: <span id="a0404"></span><a href="#top04">&#8593;</a>

1. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">`Object.assign()`</a>

You can use the `Object.assign()`.

```typescript
let person = { name: "Mark" };
let copiedPerson = Object.assign({}, person);
```

This syntax creates a new object (the curly braces ( { } ) part) and assigns all properties of the old object (the second argument) to that newly created one. This creates a copy.

<br>

2. Just as with arrays, you can also use the spread operator on objects:

```ts
let person = { name: "Mark" };
let copiedPerson = { ...person };
```

This will also create a new object (because you used { } (curly braces) ) and will then pull all properties of `person` out of it, into the brand-new objects.

Note that this is not modifying the `person` object.

<br>

More about cloning strategies <a href="https://redux.js.org/usage/structuring-reducers/immutable-update-patterns#immutable-update-patterns">here</a> (copying nested arrays, objects etc).

<br>
<br>

### **Array & Object Destructing** <span id="a0405"></span><a href="#top04">&#8593;</a>

Arrays:

```ts
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// destructure = pulling elements of out the array, in this case into separate constants/variables
const [hobby1, hobby2] = hobbies;
// basic syntax: const [] = arrToDestructure;

console.log(hobbies, hobby1, hobby2);
// output:
// Array ["Sports", "Cooking"]
// "Sports" "Cooking"
```

Objects:

```ts
let person = {
  fName: "Mark",
  age: 27,
};

const { fName, age } = person; // the values should be the same

console.log({ fName, age }, person);
// output:
// Object { fName: "Mark", age: 27 }
// Object { fName: "Mark", age: 27 }


// overwriting the name of the values:

// change fName property to userName property
const { fName: userName, age } = person; ( >> this is JS syntax, this is not typing!! << )

// changed the fName property to userName 
console.log(userName, age);
```

<br><br>

<hr>

<br><br>

## **Section-05: Classes & Interfaces** <span id="top05"></span>

<br><br>

## **Section-05-a: Classes** <span id="top05a"></span>

<br><br>

1. <a href="#a0500a">Classes & Instances</a>
2. <a href="#a0501a">Compiling to JavaScript</a>
3. <a href="#a0502a">JavaScript "this" Keyword</a>
4. <a href="#a0503a">Constructor Functions & The "This" keyword</a>
5. <a href="#a0504a">"private" and "public" Access Modifiers</a>
6. <a href="#a0505a">"readonly" keyword</a>
7. <a href="#a0506a">Inheritance</a>
8. <a href="#a0507a">Getters and Setters</a>
9. <a href="#a0508a">Static Methods & Properties</a>
10. <a href="#a0509a">Abstract Classes</a>

<br><br>

### **Classes & Instances** <span id="a0500a"></span><a href="#top05a">&#8593;</a>

Objects: instances of classes == based on classes

Classes: blueprints for objects

<br>

<small>(start project in watch mode: npm start & tsc -w)</small>

<br>

### **Creating a Class**

```ts
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

// creating instance of a class - object
const accounting = new Department("Accounting"); // constructor arguments inside of (parentheses) ()

console.log(accounting);
// output:
Object { name: "Accounting" }
name: "Accounting"
```

<br>

### **Compiling to JavaScript** <span id="a0501a"></span><a href="#top05a">&#8593;</a>

In ES6 the code is almost the same (except for types of course),
below ES6 there's a lot of differences, for example constructor functions.

<br>
<br>

### **JavaScript this keyword** <span id="a0502a"></span><a href="#top05a">&#8593;</a>

In an object method, `this` refers to the **object**.

<br>

Alone this refers to the global object (window object in the browser)

<br>

In a function, `this` refers to the global object (window object in the browser)

<br>

In a function, in strict mode, `this` is `undefined`

<br>

In an event, `this` refers to the **element** that received the event (i.e. input element/object)

<br>
<br>

### **Constructor Functions & The "This" Keyword** <span id="a0503a"></span><a href="#top05a">&#8593;</a>

**This** keyword typically refers to a concrete instance of a class that was created, and with the dot notation you can access all the properties and methods of this instance (here this.name).

```ts
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // providing a "hint" for TypeScript (about what "this" is):
  describe(this: Department) {
    console.log("Department: " + this.name);
    // this inside of describe() should always refer to an instance that's based
    // on the Department class, so an object which will be type of Department
  }
}

// creating an instance of a class - object
const accounting = new Department("Accounting"); // constructor arguments inside of parentheses - ()

accounting.describe();
// output: Department: Accounting

const accountingCopy = { name: "s", describe: accounting.describe };

// output: Department: undefined
// why? because it only points to the method, it doesn't provide arguments!
accountingCopy.describe();
```

<br>

### **"private" and "public" Access Modifiers** <span id="a0504a"></span><a href="#top05a">&#8593;</a>

private = accessible only within a class

public = accessible everywhere

<br>

private properties and public methods (which usually have validation) to modify those properties.

### **"readonly" keyword** <span id="a0505a"></span><a href="#top05a">&#8593;</a>

the name is self-explanatory, after initialization you can't change it's value, for example an id should be readonly.

<br>
<br>

### **Inheritance** <span id="a0506a"></span><a href="#top05a">&#8593;</a>

The syntax:

`class SubClass extends BaseClass {}`

The `SubClass`(child) inherits everything from the `BaseClass`(parent), even the `constructor()`

<br>

Whenever you want to use properties from the `BaseClass`, inside of `SubClass`, you have to add the `super()` keyword/method into the sub class' constructor. The `super()` method is used to get the properties of the base class.

```ts
class SubClass extends BaseClass {
  constructor(args: string) {
    super(args);
  }
}
```

<br>

private methods/properties of the base class are not accessible in the sub class.

<br>

### **Getters and Setters** <span id="a0507a"></span><a href="#top05a">&#8593;</a>

Getter Syntax:

```ts
get someValueGetter() {
  if (this.someProperty) {
    return this.someProperty;
  }
}
```

A getter always returns something

<br>

Setter Synax:

```ts
set someValueSetter(value: someType) {
  if (!value) {
    throw new Error('Invalid value!');
  }
  this.addSomething(value);
}
```

<br>

### **Static Methods & Properties** <span id="a0508a"></span><a href="#top05a">&#8593;</a>

Those are used to modify classes without needing to instantiate them (e.g `Math` class (`Math.random()`, etc)). So no need to use the `new` keyword in order to modify a class.

<br>

Syntax:

```typescript
static createEmployee(name: string) {
  return { name: name };
}

const employee1 = Department.createEmployee('Mark');
```

Though you can't mix static and non static classes (possibly you won't be able to access some properties/methods of those).

<br>

### **Abstract Classes** <span id="a0509a"></span><a href="#top05a">&#8593;</a>

Syntax:

```
abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}
```

<br>

Abstract Classes = polymorphism

<br><br>
<br><br>

## **Section 05-b: Interfaces** <span id="top05-b"></span>

<br><br>

1. <a href="#a0500">Interface introduction & definition.</a>
2. <a href="#a0501">Using interfaces with Classes.</a>
3. <a href="#a0502">Why Interfaces?</a>
4. <a href="#a0503">Optional Paremeters & Properties</a>

<br><br>

### **A First Interface**

<br>

<span id="a0500">What is an interface?</span> <a href="#top05-b">&#8593;</a>

Interface describes the structure of an object

<br>

Interface keyword exists only in TypeScript, here's how the syntax looks:

```typescript
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Mark",
  age: 23,
  greet(phrase: string) {
    console.log(phrase + " " + this.name); // `this` in this case is a reference to the object
  },
};

user1.greet("Hi there - I am");
```

You use `interface` not as a blueprint, but as a custom type.

An `interface` can't have an initializer.

You only specify the head of a Method in an `interface` with the types and return type.

<br>

Summary:

`interface` allows us to **define** the **structure of an object**. We can use it **as a type** to type check for objects that must have this (`interface`'s) structure.

<br><br>

### **Using Interfaces with Classes** <span id="a0501"></span><a href="#top05-b">&#8593;</a>

<br>

A class can implement `interface`'s features (properties, methods, etc) and follow it's rules:

```typescript
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// you can implement multiple interfaces
class Person implements Greetable, AnotherInterface {
  name: string;
  // you can add more properties to this class:
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name + " I am " + this.age + " years old"); // `this` in this case is a reference to the object
  }
}
```

The `Person` class has to meet the `Greetable` `interface`'s requirements, meaning it has to have the same properties and methods, but it also can have it's own properties and methods on top of that.

<br>

### **Why interfaces?** <span id="a0502"></span><a href="#top05-b">&#8593;</a>

You can use `interfaces` to force a class to have particular properties and methods, so you can be sure that it will have those.

<br>

### **Optional Paremeters & Properties** <span id="a0503"></span><a href="#top05-b">&#8593;</a>

You can define optional properties in interfaces and classes:

```typescript
interface Named {
  outputName?: string;
}
```

The question mark before a type means that this property might exist in classes that implement this `interface`, but it doesn't have to.

<br>

You can also have optional methods.

```typescript
interface Person {
  name: string;

  greet?(): void;
}
```

<br>

This aswell works in classes:

```typescript
class Person implements Named {
  name?: string;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
}
```

<br><br>

<hr>

<br><br>

## **Section 06: Advanced Types** <span id="top06"></span>

<br><br>

1. <a href="#a0600">Intersection Types.</a> and <a href="#a060x">Extends vs Implements</a>
2. <a href="#a0601">Type Guards.</a>
3. <a href="#a0602">Discriminated Unions</a>
4. <a href="#a0603">Type Casting</a>
5. <a href="#a0604">Index Properties</a>
6. <a href="#a0605">Function Overloads</a>
7. <a href="#a0606">Optional Chaining</a>
8. <a href="#a0607">Nullish Coalescing</a>

<br><br>

### **Intersection Types** <span id="a0600"></span><a href="#top06">&#8593;</a>

<br>

Intersection types allow us to combine other types:

```typescript
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date; // Date Type == JavaScript Date() Object
};

type ElevatedEmployee = Admin & Employee;

const emp1: ElevatedEmployee = {
  name: 'Mark',
  privileges: ['create-server'],
  startDate: new Date();
}
```

Intersection types are closely related to `interface` inheritance. This can be achieved with interfaces too:

```typescript
interface Admin {
  name: string;
  privileges: string[];
};

interface Employee {
  name: string;
  startDate: Date; // Date Type == JavaScript Date() Object
};

interface ElevatedEmployee extends Employee, Admin {
}

const e1: ElevatedEmployee = {
  name: 'Mark',
  privileges: ['create-server'],
  startDate: new Date();
}
```

<br>

This can be also achieved with Union types:

```typescript
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // type Universal will be of type number
```

in Summary:

**Objects/Interfaces** = combination of those (of their properties)

**Union types** = the types they have in common

<br><br>

### **Extends VS implements**  <span id="a060x"></span><a href="#top06">&#8593;</a>

<br>

`extends`: The child class (which is extended) will inherit all the properties and methods of the class it extends

`implements`: The class which uses the implements keyword will need to implement all the properties and methods of the class which it implements

To put in simpler terms:

`extends`: Here you get all these methods/properties from the parent class so you don't have to implement this yourself

`implements`: Here is a contract which the class has to follow. The class has to implement at least the following methods/properties

<br>

<small><a href="https://stackoverflow.com/questions/38834625/whats-the-difference-between-extends-and-implements-in-typescript">more about extends vs implements it here</a>


<br><br>

### **Type Guards** <span id="a0601"></span><a href="#top06">&#8593;</a>

Type guards help us with union types. They are used to know which exact type you're getting now, at a runtime.

Examples:

#### if (`typeof` x === 'someType') {}

```typescript
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // type guard (if)
    return a.toString() + b.toString();
  }
  return a + b;
}
```

#### if (x `in` y)

```typescript
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  // if 'privileges' property exists in emp (employee) then...
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);
// output: Name: ..., Privileges: ..., Start Date: ...
```

#### if (x `instanceof` y)

```typescript
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

Type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }

//  if ('loadCargo' in vehicle) {
//    vehicle.loadCargo(1000);
//  }

}

useVehicle(v1);
useVehicle(v2);
```

Type guards describe the idea of checking if a certain property or method exists before you try to use it, or if you can do something with the type before you try to use it.

Objects: `instanceof`, `in`

other types: `typeof`

<br>
<br>

### **Discriminated Unions** <span id="a0602"></span><a href="#top06">&#8593;</a>

`Discriminated unions` is a pattern which you can use when working with `union types` that makes implementing `type guards` easier. It's available when you're working with `Object`s and `union types`.

```typescript
interface Bird {
  // discriminated union - used to describe that interface/object
  type: "bird"; // literal type
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // literal type
  runningSpeed: number;
}

type Animal = Bird | Horse;

function MoveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
```

<br><br>

### **Type Casting** <span id="a0603"></span><a href="#top06">&#8593;</a>

Type casting helps you tell TypeScript that some value is of a specific type where TypeScript is not able to detect it on it's own.

Example:

```HTML
HTML:

<p></p>

(empty paragraph)
```

```ts
// TypeScript

const paragraph = document.querySelector("p"); // == HTMLParagraphElement
```

In this case we could use innerText since TS knows that this is a HTMLParagraphElement.

<br>

Not in the case if it's a HTMLElement since TS doesn't know if this element could have innerText property.

<br>

`Type Casting`:

```html
<input id="user-input" />
```

```typescript
// ! means that this element will never yield null
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
);

// this is TypeScript only feature, works differently in JSX

userInputElement.value = "hello";
```

Another method of doing this:

```ts
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;
```

Alternative without the exclamation mark:

```ts
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "hello";
}
```

<br><br>

### **Index Properties** <span id="a0604"></span><a href="#top06">&#8593;</a>

```ts
interface ErrorContainer {
  // Index type:
  [prop: string]: string;
  // any property name which would be a string and the value which would also be a string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  // stringProperty: 'stringValue', as it's in the interface

  username: "Must start with a capital character!",
};
```

Index type gives us extra flexibility so that we don't need to know in advance which property name we want to use, and how many properties we need.

<br><br>

### **Function Overloads** <span id="a0605"></span><a href="#top06">&#8593;</a>

Function Overloads - a feature that allows us to define multiple function signatures for one and the same function, which simply means we can have multiple possible ways of calling a function with different parameters to then do something inside of that function.

<br>

Use it whenever TypeScript can't infer a type on it's own.

<br>

Example:

```ts
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // type Universal will be of type number

// we're telling TS: if we call this function and both arguments are of type number, then this function returns a number
// Function overload syntax:
function add(a: number, b: number): number;

function add(a: string, b: string): string;

// and the other possibilities:
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // type guard (if)
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Mark", " Bob");
result.split(" ");
```

Overload basically means that there are many other ways of calling a certain function.

<br><br>

### **Optional Chaining** <span id="a0606"></span><a href="#top06">&#8593;</a>

Optional chaining is used when you're not sure whether a certain property on an object is set or if it's undefined.

For example, let's say we're fetching this data from backend:

```ts
const fetchedUserData = {
  id: "u1",
  name: "Mark",
  // job: { title: 'CEO', description: 'The CEO of the company'}
};

// JavaScript way:
console.log(fetchedUserData.job && fetchedUserData.job.title);

// TypeScript way - optional chaining
console.log(fetchedUserData?.job?.title);

// This tells TypeScript:
// if job property exists, then access job property,
// if title property exists, then access title property
```

Optional chaining operator ( `?` ) helps us safely access nested properties and nested objects in our object data and if the thing in front of the question mark is undefined it will not access the thing that it's after and therefore will not throw a runtime error, but instead it will just not continue.

<br>

So basically behind the scenes it's compiled into an `if` check, which checks whether ( the `fetchedUserData` property ) exists before it tries to access ( the `job` property ).

<br><br>

### **Nullish Coalescing** <span id="a0607"></span><a href="#top06">&#8593;</a>

Coalesce = connect / link / join / merge / mix / unite

<br>

Nullish Coalescing - a TypeScript feature which helps us deal with null-ish data.

<br>

The Nullish Coalescing operator: `??`

<br>

For example we'd want to treat `null` or `undefined` values differently (compared to for example `string`, `number` etc):

```ts
const userInput = "";

const storedData = userInput ?? "DEFAULT";
```

`??` basically means: if this value is `null` or `undefined` (only those two options), then use the `'DEFAULT'` fallback, if it's not `null` or `undefined`, then we'll use `userInput` value/fallback (option).

<br>

So console logging would look like this:

```ts
const userInput = "";
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
//output: ''

const userInput = undefined;
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
//output: DEFAULT
```

<br><br>

<hr>

<br><br>

## **Section 07: Generics** <span id="top07"></span>

<br>

1. <a href="#a0700">Built-in Generics & What are Generics?</a>
2. <a href="#a0701">Creating a Generic Function</a>
3. <a href="#a0702">Working with Constraints</a>
4. <a href="#a0703">Another Generic Function</a>
5. <a href="#a0704">The "keyof" Constraint</a>
6. <a href="#a0705">Generic Classes</a>
7. <a href="#a0706">Generic Types - Summary</a>
8. <a href="#a0707">Generic Utility Types</a>
9. <a href="#a0708">Generic Types vs Union Types</a>

<br><br>

<br>

<br><br>

### **Built-in Generics & What are Generics?** <span id="a0700"></span><a href="#top07">&#8593;</a>

<br>

`Generic Type` is a **type which is** kind-of **connected with some other _type_** and is really flexible regarding which exact type that other _type_ is.

<br>

Whenever you see something like this `<T>` in TypeScript - you're dealing with a generic type.

<br>

#### An example of a Generic Type: `Array` Type

<br>

For example:

```ts
const names: Array<string> = [];

// this is the same thing
const names2: string[] = [];

// Array<string> == string[]
```

You can also use `union types` with `generic types`:

```ts
const userInput: Array<string | number> = [];
```

<br>

The idea of `generic types` is let TypeScript provide support during development. A certain type (in this case the `Array` type) might simply work better or work at all if you provide additional information about a type of data that's provided in this (`Array`) type.

`Array` type is just an example.

<br>

#### Another Generic Type - the `Promise` type:

```typescript
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  //data.split(' '); // - of course it won't work
});
```

So you're really flexible what you do with that `generic type` information - an `Array` knows which data it stores, a `Promise` knows which data it returns.

<br>

If you build your own `generic` `classes` or `functions` you might do something totally different in there, but in the end **`Generic Types` help you to get additional type information**, if you got a more complex `class` or more complex `function` that does something with the data that's coming in, in a way where it doesn't really care about the data being of one particular type, but where you want to store the type information of that incoming data to get better TypeScript support whenever you work with your `generic types`, `Promise`s or `Array`s.

<br><br>

### **Creating a Generic Function** <span id="a0701"></span><a href="#top07">&#8593;</a>

<br>

A `generic` function that merges two objects and returns a new object:

```typescript
function merge<T, U>(objA: T, objB: U) {
  // returns T & U ( merge(): T & U )
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Mark" }, { age: 26 });
```

With Generic Types you can specify what kind of `Objects` you'd want to assign/return. So you're not dealing with some random object types, but with specific object types.

<br>

With Generic Types we're giving TypeScript the extra information that we don't know what exactly the types will be. We're just specifying that those objects will be of `any` type, but those are going to be different than each other.

<br>

You can tell specificly TypeScript which types it should fill in by adding angle brackets after the function name when you call it, and then you would fill your own types for `<T>` and `<U>`, for example:

```typescript
// <string, number> means <T> will be of type string and <U> of type number,
const mergedObj = merge<string, number>({ name: 'Mark' }, { age: 26 });


// Explicitly assigning the types (but this is redundant)
const mergedObj = merge<{name: string, string[]}, {age: number}>({ name: 'Mark', ['one', 'two'] }, { age: 26 });
```

So this is what `Generics` are all about - you can fill in different concrete types for different function calls, but we don't need to do that here, since TypeScript simply infers the types of the values we're passing as arguments, and then assigns the infered types for `<T>` and `<U>` for this function call.

<br><br>

### **Working with Constraints** <span id="a0702"></span><a href="#top07">&#8593;</a>

<br>

Constraint means a limitation or restriction.

<br>

In this example we'll restrict the types of `<T>` and `<U>` object types:

```ts
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Mark", hobbies: ["Hiking"] }, { age: 26 });
// const mergedObj = merge({ name: "Mark", hobbies: ['Hiking'] }, 26); // wrong since it's only a number without a property
```

<br>

We can guarantee that we get two objects there by setting certain `Constraints` on `Generic types`, and this `Constraints` here could be anything, you can refer to `Object`, a `string`, your own `type`, `union types`.

<br><br>

### **Another Generic Function** <span id="a0703"></span><a href="#top07">&#8593;</a>

<br>

```ts
interface Lengthy {
  length: number;
}

// the Lengthy interface ensures that the Generic <T> type will have length property with a numeric value
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hello"));
// output: ["Hello", "Got 5 elements."] (5 characters)

console.log(countAndDescribe(["One", "Two"]));
// output: [Array(2), "Got 2 elements."]
```

<br><br>

### **The "keyof" Constraint** <span id="a0704"></span><a href="#top07">&#8593;</a>

<br>

```ts
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Mark" }, "name");
```

First parameter `<T>`, should be any kind of Object,
and the second parameter `<U>` should be any kind of key in that (`<T>`) Object.

<br><br>

### **Generic Classes** <span id="a0705"></span><a href="#top07">&#8593;</a>

<br>

```ts
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // if item not found
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// thanks to Generic types we can set this DataStorage class to hold strings only
const textStorage = new DataStorage<string>();
textStorage.addItem("Mark");
textStorage.addItem("Bob");
textStorage.removeItem("Mark");
console.log(textStorage.getItems());
//output: ["Bob"]

// in this case numbers only
const numberStorage = new DataStorage<number>();
```

Again: the general idea of Generic Types is that we can make flexible and strongly typed classes/functions etc.

<br>

```ts
// this won't work since we're working only with primitives and not reference types
// const objStorage = new DataStorage<object>();

// objStorage.addItem({ name: "Mark" });
// objStorage.addItem({ name: "Bob" });
// // ...
// objStorage.removeItem({ name: "Bob" });
// console.log(objStorage.getItems());
```

<br><br>

### **Generic Types - summary** <span id="a0706"></span><a href="#top07">&#8593;</a>

Generic Types give us flexibility combined with type safety. We're flexible regarding the values we pass in or the values we use in a class, at least as long as we adhere to the possible constraints.

We then get the full type support with a generic class/function, since TypeScript knows which concrete type we pass in when we call a generic function or when we instantiate a generic class.

<br><br>

### **Generic Utility Types** <span id="a0707"></span><a href="#top07">&#8593;</a>

<br>

<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html">Utility Types - Documentation</a>

<br>

#### **Built-in Generic Utility Types**

##### **`Partial` utility type**

```ts
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}
```

So this tells TypeScript that (`courseGoal`) is an Object which in the end will be a `CourseGoal`, but initially `Partial` kind of wraps our own type and changes it into a type where all (`CourseGoal`'s) properties are optional.

<br>

In short:

<br>

`Partial` turns an object type into an object type where all the properties are optional.

<br><br>

##### **`Readonly` utility type**

<br>

```ts
const names: Readonly<string[]> = ["Bob", "Mark"];
names.push("John"); // error
names.pop(); // error
```

This can also be used on objects.

<br>

<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html">Full list of Generic Utility Types</a>

<br><br>

### **Generic Types vs Union Types** <span id="a0708"></span><a href="#top07">&#8593;</a>

<br>

Union Types are great when you want to have a function which you can call with one of these (Union) types every time you call it.

E.g. `type Combinable = string | number`;

<br>

Generic Types are great when you want to lock in a certain type.

<br><br>

(Generic Types)

Use the same type throught the entire class instance you create,

use the same type throught the entire function - that's when you want a Generic Type.

<br><br>

(Union Types)

You use Union Types when you want to be flexible to have a different type with every method/function call.

<br><br>

Generics <a href="https://www.typescriptlang.org/docs/handbook/2/generics.html">Documentation</a>

<br><br>

<hr>

<br><br>
