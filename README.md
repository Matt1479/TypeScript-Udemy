# TypeScript Notes (Udemy)

<br>

<nav>

## Navigation <span id="nav"></span>

### <a href="#top01">**Section-01**</a>

### <a href="#top02">**Section-02**</a>

### <a href="#top03">**Section-03**</a>

### <a href="#top04">**Section-04**</a>

### <a href="#top05">**Section-05**</a>

### <a href="#top06">**Section-06**</a>

### <a href="#top07">**Section-07**</a>

### <a href="#top08">**Section-08**</a>

...

### <a href="#top10">**Section-10**</a>

### <a href="#top11">**Section-11**</a>

### <a href="#top12">**Section-12**</a>

</nav>

<br><hr><br>

## **Section 01: Getting Started** <a href="#nav">&#8593;</a> <span id="top01"></span>

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

## **Section 02: TypeScript Basics & Basic Types** <a href="#nav">&#8593;</a> <span id="top02"></span>

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
[1, 2, 3][("a", "b", "c")];
```

Any JavaScript array, type can be flexible or strict (regarding the element types)

Declaring a string array:

```ts
let strArr: string[];
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
const tupleArr = [1, 2]; // fixed type (number) & fixed length (2 elements)
```

Tuple type is a fixed type array with fixed length

<br>

Added by TypeScript: Fixed-length array with a fixed type

Tuple is good to use when you have exactly x amount of elements in an array and you know the type of each value in advance. In that case you should use tuple type instead of an array since it adds more strictness into the app.

For example you could limit it to 2 elements, where first element would be of type `number`, second element of type `string`:

```ts
const mixedTupleArr = [1, "abc"];
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
const u1: User = { name: "Mark", age: 30 }; // this works!
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
userInput = "Bob";

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

## **Section 03: The TypeScript Compiler (and its Configuration)** <a href="#nav">&#8593;</a> <span id="top03"></span>

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

## **Section 04: Next-generation JavaScript and TypeScript** <a href="#nav">&#8593;</a> <span id="top04"></span>

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

## **Section-05: Classes & Interfaces** <a href="#nav">&#8593;</a> <span id="top05"></span>

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
    // on the Department class, so an object which will be of type Department
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

```ts
abstract class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
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

You only specify the head of a method in an `interface` with the types and return type.

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

## **Section 06: Advanced Types** <a href="#nav">&#8593;</a> <span id="top06"></span>

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

### **Extends VS implements** <span id="a060x"></span><a href="#top06">&#8593;</a>

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
      break;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
```

<br><br>

### **Type Casting** <span id="a0603"></span><a href="#top06">&#8593;</a>

Type casting helps you tell TypeScript that some value is of a specific type where TypeScript is not able to detect it on its own.

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

userInputElement.value = "hello"; // .value is .innerText/HTML etc
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

Use it whenever TypeScript can't infer a type on its own.

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

## **Section 07: Generics** <a href="#nav">&#8593;</a> <span id="top07"></span>

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

## **Section 08: Decorators** <a href="#nav">&#8593;</a> <span id="top08"></span>

<br>

1. <a href="#a0800">A First Class Decorator</a>
2. <a href="#a0801">Working with Decorator Factories</a>
3. <a href="#a0802">Building More Useful Decorators</a>
4. <a href="#a0803">Adding Multiple Decorators</a>
5. <a href="#a0804">Diving into Property Decorators</a>
6. <a href="#a0805">Accessor & Parameter Decorators</a>
7. <a href="#a0806">When do Decorators Execute?</a>
8. <a href="#a0807">Returning (and changing) a Class in a Class Decorator</a>
9. <a href="#a0808">Other Decorator Return Types</a>
10. <a href="#a0809">Property Descriptor (JS)</a>
11. <a href="#a0810">Creating an "Autobind" Decorator</a>
12. <a href="#a0811">Validation with Decorators - First Steps</a>
13. <a href="#a0812">Validation with Decorators - Finished</a>
14. <a href="#a0813">Useful Resources & Links</a>

<br><br>

<br>

<br><br>

### **A First Class Decorator** <span id="a0800"></span><a href="#top08">&#8593;</a>

<br>

**Meta-Programming** - you use somebody's else code without knowing exactly how it works, or how it's written, all you need to know is how to use it (e.g. DOM API, jQuery, etc).

<br>

Setup: `tsconfig.json`:

```json
"compilerOptions": {
  "target": "es6",
  "experimentalDecorators": true
}
```

<br>

`Decorator` is a `function` you apply to something (i.e. a `class`) in a certain way.

<br>

The naming convention: UpperCamelCase, e.g.: `function MyDecoratorFunction(args) { ... }`

```ts
// creating a Decorator function
// decorators receive arguments:
function Logger(constructor: Function) {
  // ( constructor - formerly target (naming) )
  console.log('Logging...');
  console.log(constructor);
}

// applying the Decorator function to a class
// @Logger() points to a decorator, it does not execute it
@Logger()
class Person {
  name = 'Mark';

  constructor() {
    console.log('Creating person object...');
  }
}

const person1 = new Person();

console.log(person1);


// decorator output:
'Logging...'
class Person {
  constructor() {
    this.name = 'Mark';
    console.log('Creating person object...');
  }
}
// class logging output:
'Creating person object...'
Person {name: 'Mark'};
```

Note that the `Decorator` output is printed first before we see `'Creating person object...' `and our `Person object`. Decorators execute when your **class is defined**, not when it is instantiated. Decorators run when JavaScript finds your `class` definition (`constructor` function definition), not when you use that `constructor` function to instantiate an object.

<br><br>

### **Working with Decorator Factories** <span id="a0801"></span><a href="#top08">&#8593;</a>

<br>

Another way of creating a `Decorator` - using a `Decorator Factory`.

`Decorator factory` returns a `decorator` function, and allows us to configure it when we assign it as a `decorator` to something.

<br>

```ts
// a different type of defining a decorator function - with custom argument(s)
function Logger(logString: string) {
  // defining a factory (anonymus function)
  return function (constructor: Function) {
    // show logString
    console.log(logString);
    // we're executing a function that will return decorator
    console.log(constructor);
  };
}

// with factories you can use custom argument(s) (value)
@Logger("LOGGING - PERSON")
class Person {
  name = "Mark";

  constructor() {
    console.log("Creating person object...");
  }
}

const person1 = new Person();

console.log(person1);
```

The advantage of that is now we can pass in values which will be used by that inner `returned` `decorator` function.

<br><br>

### **Building More Useful Decorators** <span id="a0802"></span><a href="#top08">&#8593;</a>

<br>

A `decorator` function using a template:

```ts
function WithTemplate(template: string, hookId: string) {
  // returning a function - the actual Decorator
  // underscore in place of argument - it signals that you don't need this argument
  // but it's required to have an argument
  return function (_: Function) {
    // return function(constructor: any) { // rendering p.name //
    // rendering HTML by using a decorator
    const hookEle = document.getElementById(hookId);

    // create a new person: //
    // const p = new constructor(); //
    if (hookEle) {
      hookEle.innerHTML = template;
      // displaying the p.name value in the template: //
      // hookEle.querySelector('h1')!.textContent = p.name; //
    }
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Mark";

  constructor() {
    console.log("Creating person object...");
  }
}
```

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"><!-- template rendering here --></div>
</body>
</html>
```

Angular uses `Decorators`, like for example `@Component` decorator to allow you to pass in an object where you specify things like the `template` for this `Component`, and the `selector` in the DOM where this template should be rendered.

<br>

This is relatively close to what we defined in `WithTemplate` decorator: a `template` and then a place where it should be rendered (`hookId` / `'app'`). Of couse Angular decorators are more advanced, nonetheless the core idea is the same. Angular gives you decorators, so that you can specify some HTML code (in the `template` property of `@Component` decorator) which can be connected to your Component class (`export class AppComponent`) that will be rendered to the DOM when this (`AppComponent`) Component gets rendered.

<br><br>

### **Adding Multiple Decorators** <span id="a0803"></span><a href="#top08">&#8593;</a>

<br>

You can add more than one Decorators to a class or anywhere else where you can use a decorator:
(for code reference check the previous sub-sections)

<br>

```ts
@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Mark";

  constructor() {
    console.log("Creating person object...");
  }
}
```

The order of executing multiple decorators: from the bottom to top, which means in this case `@WithTemplate` executes first, then `@Logger` after it. In the case of factories - the `@Logger` would be executed first, and `@WithTemplate` second.

<br>

In short: Decorators execute bottom-up, factories execute up-bottom.

<br><br>

### **Diving into Property Decorators** <span id="a0804"></span><a href="#top08">&#8593;</a>

<br>

Another place where you can add `Decorator` - `property` of a `class`.

<br>

```ts
// creating a decorator which is going to be added to a property,
// it needs the property arguments (target, propertyName)
// target: any - because it could be either the prototype (instance of accessor),
// or a constructor function
// reminder: a prototype is similar to class,
// in actuality the class is just syntactic sugar,
// and underneath it is the prototype (of a function/object/array/etc.)
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

class Product {
  // adding decorator to the property:
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
```

This `decorator` will execute when JavaScript registers the `class` definion, when you define this (`@Log`) property to JavaScript as part of your class.

<br><br>

### **Accessor & Parameter Decorators** <span id="a0805"></span><a href="#top08">&#8593;</a>

<br>

Besides `properties` you can also add `decorators` to `Accessors` (setters/getters), methods, and to a parameter:

```ts
// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator!");
//   console.log(target, propertyName);
// }

// Accessor decorator: 3 arguments (target, name(of the accessor), descriptor)
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target, name, descriptor);
}

// Method decorator: 3 arguments (target, name(of the method), descriptor) - the same as Accessor decorator
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target, name, descriptor);
}

// Paramter Decorator: - arguments (target, name(of the method), position(of this argument))
// position - a number of argument, e.g. tax argument is the first arg (of index 0)
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target, name, position);
}

class Product {
  // @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
```

<br><br>

### **When do Decorators Execute?** <span id="a0806"></span><a href="#top08">&#8593;</a>

<br>

Note: `decorator` is a function that executes when your `class` is defined, not when it is instantiated.

<br><br>

### **Returning (and changing) a Class in a Class Decorator** <span id="a0807"></span><a href="#top08">&#8593;</a>

<br>

```ts
function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // returning constructor function - replacing the class with a custom class
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();

        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);

        const p = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Mark";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);
```

The underscore parameter (`_`) tells TypeScript that you won't use this parameter, but it needs to be there in order to fullfill the requirements (that this constructor function has to have a parameter);

<br><br>

### **Other Decorator Return Types** <span id="a0808"></span><a href="#top08">&#8593;</a>

<br>

Decorators that can return values: Accessor `Decorators` & Method `Decorators`.

<br>

On Accessor `Decorators` & Method `Decorators` you can return `property descriptor`.

<br>

Decorators that can't return values (will be ignored): Property & Parameter `Decorators`.

<br>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">More on Property Descriptors</a>

<br>

**Property Descriptor (in JS)**: <span id="a0809"></span><a href="#top08">&#8593;</a>

`Property Descriptor` - extra information about properties inside of `Objects`.

<br>

| Property Descriptors Methods and Usage              |
| --------------------------------------------------- |
| Object.defineProperty(obj, propName, {} )           |
| Object.defineProperties(obj, props)                 |
| Object.getOwnPropertyNames(obj)                     |
| Object.getOwnPropertyDescriptor(obj, prop)          |
| Object.getOwnPropertyDescriptors(obj)               |
| Object.keys(obj) - list of enumerable properties    |
| Object.values(obj) - list of enumerable prop values |

<br>

|                                |                                      |
| ------------------------------ | ------------------------------------ |
| obj.propertyIsEnumerable(prop) | Check if this property is enumerable |
| obj.hasOwnProperty(prop)       | Check if variable has a property     |

<br>

| Objects can be                                   |
| ------------------------------------------------ |
| 1. Extensible - new properties can be added      |
| 2. Frozen - props cannot be changed in any way   |
| 3. Sealed - props can't be deleted or configured |
| but are still writable                           |

<br>

|                               |              |
| ----------------------------- | ------------ |
| Object.isExtensible(obj)      | Check if ... |
| Object.isFrozen(obj)          |
| Object.isSealed(obj)          |
| Object.preventExtensions(obj) |
| Object.freeze(obj)            |
| Object.seal(obj)              |

<br>

| Object PROPERTIES can be                          |
| ------------------------------------------------- |
| 1. Writable - change the value                    |
| 2. Enumerable - seen through a for...in loop      |
| 3. Configurable - change the property descriptors |

<br>

| Descriptor Groups                        |                                                     |
| ---------------------------------------- | --------------------------------------------------- |
| DATA                                     | ACCESSOR                                            |
| value (of property - e.g. `obj.name`)    | get (get method - reading the value of a property)  |
| writable (can change the value)          | set (set method - updating the value of a property) |
| configurable (can change properties)     | configurable (can change properties)                |
| enumerable (can loop through properties) | enumerable (can loop through properties)            |

<br>

```js
let log = console.log;
let obj = {
  name: "Bob",
  age: 45,
};

// defining property descriptors (value, writable, configurable, enumerable)
Object.defineProperty(obj, 'test', {
  value: 'testValue',
  writable: true,
  configurable: true,
  // enumerable: false meaning that it'll be locked from looping through
  enumerable: false;
});

//
Object.defineProperty(obj, 'frank', {
  configurable: true,
  enumerable: true,
  // this refering to obj
  // value refering to value that's inside of an object
  get: () => this.value,
  set: (_val) => {
    this.value = _val;
  }
});


for (let prop in obj) {
  log(prop);
}
log( obj, obj.test, obj.frank );
obj.frank = 'frankValue';
log(obj.frank);
```

<br><br>

### **Example: Creating an "Autobind" Decorator** <span id="a0810"></span><a href="#top08">&#8593;</a>

<br>

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Understanding TypeScript</title>
  <script src="dist/app.js" defer></script>
</head>
<body>
  <div id="app"></div>
  <button>Click me</button>
</body>
</html>
```

```ts
// creating a method decorator which automatically binds the method
// to the surrounding class
// (the object this method belongs to everytime it's called, no matter where we call it)
function AutoBind(
  // target: any,
  _: any, // formerly target: any
  // methodName: string,
  _2: string, // formerly methodName: string
  descriptor: PropertyDescriptor
) {
  // target: any (constructor function OR prototype)

  // accessing the original method (showMessage) - using a PropertyDescriptor (JS thing)
  const originalMethod = descriptor.value;

  // replacing the old descriptor with a new one - that has get() method
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // this will refer to the object that triggered the get() method
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  // decorator function returning a descriptor object
  return adjustedDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);
```

<br><br>

### **Validation with Decorators - First Steps** <span id="a0811"></span><a href="#top08">&#8593;</a>

<br>

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Understanding TypeScript</title>
    <script src="dist/app.js" defer></script>
</head>
<body>
    <form>
      <input type="text" placeholder="Course title" id="title">
      <input type="text" placeholder="Course price" id="price">
      <button type="submit">Save</button>
    </form>
</body>
</html>
```

```ts
// --- An example of validator Decorators ---
// --- for example you'd just import those and implement them in your project ---

function Required() {}

function PositiveNumber() {}

// this function applies validation to objects
function validate(obj: object) {}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value; // +priceEl.value - converting it to a number

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!"); // or: throw new error('Invalid input...');
    return; // continue
  }
  console.log(createdCourse);
});
```

<br><br>

### **Validation with Decorators - Finished** <span id="a0812"></span><a href="#top08">&#8593;</a>

<br>

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Understanding TypeScript</title>
    <script src="dist/app.js" defer></script>
</head>
<body>
    <form>
      <input type="text" placeholder="Course title" id="title">
      <input type="text" placeholder="Course price" id="price">
      <button type="submit">Save</button>
    </form>
</body>
</html>
```

```ts
// ---

interface ValidatorConfig {
  // index type notation:
  [property: string]: {
    [validatableProperty: string]: string[] // e.g. ['required', 'positive']
  }
}

// registered validators - initially an empty object, since initially when the app starts,
// our 3rd party library gets loaded no validators have been registered yet
const registeredValidators: ValidatorConfig = {};

// property decorator function: 2 args target (constructor or prototype), property name
function Required(target: any, propName: string) {
  // target.constructor.name - course name (class name)
  registeredValidators[target.constructor.name] = {
    // copy the other validators and put them inside of this array, then add 'required' to that array
    // ?? - Nullish Coalescing operator
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required'];
  };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive'];
  }
}

// this function applies validation to objects - it runs through all registered validators,
// then it runs different logic based on which validators it finds
// changing obj type to any to be able to accept any object which gives us flexibility
function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  // if we don't have any validator config
  // return true since it is valid - there is nothing to validate so the object certainly is valid
  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;

  // if we do find it then... loop through all properties
  for (const prop in objValidatorConfig) {
    // console.log(prop);

    // loop through array of validators
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          // !! operator (double bang operator) - converts object into (boolean): true or false values (truthy/falsey)
          // isValid and obj[prop] - both have to be true/truthy
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          // isValid and obj[prop] > 0 - both have to be true/truthy
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  // // if we make past the for loop (most likely in case of ill defined loop, empty values etc), return true as a default
  // return true;

  // now we ensure that all properties are checked and not just the first one
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value; // +priceEl.value - converting it to a number

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!"); // or: throw new error('Invalid input...');
    return; // continue
  }
  console.log(createdCourse);
});
```

<br>

<small> (I don't advise using this code in a real application, this is just a demo, you could use for example: <a href="https://github.com/typestack/class-validator">ts class validator</a>, or Angular's validators, NestJS' validators) </small>

<br>

The double bang operator - `!!` - Converts `Object` to `boolean`. If it was falsey (e.g. `0`, `null`, `undefined`, etc.), it will be `false`, otherwise, `true`.

<br>

Keep in mind that all the `decorators`, the validate function and the registry (`registeredValidators`) would be hidden away from you, that could be a part of 3rd party library, then you'd just import the `decorators`, add them to properties, and call validate (fn).

<br><br>

Useful Resources & Links: <span id="a0813"></span><a href="#top08">&#8593;

More on `Decorators`: <a href="https://www.typescriptlang.org/docs/handbook/decorators.html">Decorators - Handbook</a>

Nest JS - A Node.js framework (server side) which utilizes TypeScript: <a href="https://nestjs.com">NestJS.com</a>

<br><br>

<hr>

<br><br>

## **Section 10: Modules & Namespaces** <a href="#nav">&#8593;</a> <span id="top10"></span>

<br>

1. <a href="#a1000">Writing Module Code - Your Options</a>
2. <a href="#a1001">TS: Working with Namespaces</a>
3. <a href="#a1002">JS: Using ES Modules - The modern & recommended way</a>
4. <a href="#a1003">Understanding various Import & Export Syntaxes & Module Code Running</a>

<br><br>

<br>

<br><br>

### **Writing Module Code - Your Options** <span id="a1000"></span><a href="#top10">&#8593;</a>

<br>

#### Splitting Code Into Multiple Files

- (TS Feature) Namespaces & File Bundling
  - Use "namespace" code syntax to group code - then you can import those "namespaces" to other files
  - Per-file or bundled compilation is possible (less imports to manage)
- ES6 Imports/Exports - a modern way of importing files
  - Use ES6 import/export syntax
  - Per-file compilation, but single &lt;script&gt; import
  - Bundling via third-party tools (e.g. Webpack) is possible!

File Bundling - compile multiple files/code into one.

<br><br>

### **Working with Namespaces** <span id="a1001"></span><a href="#top10">&#8593;</a>

<br>

#### Namespaces setup

<br>

#### **Namespaces / export**:

```ts
// my-interfaces.ts
namespace App {
  // App or any other name (has to be the same as in the reference(import) file)
  // ...code goes here...
  // exporting those so they can be used outside of this file
  export interface Named {
    outputName?: string;
  }

  export class MyClass {
    // ...
  }

  export const strArr: Array<string> = [];
}
```

#### **Namespaces / import**

```ts
// app.ts

// importing namespaces:
/// <reference path="my-interfaces.ts" />

namespace App {
  // ... all code goes here
}
```

```json
/* tsconfig.json */
  "module": "amd"
/* ... */
  "outFile": "./dist/bundle.js",
/* ... */
```

```html
<!-- html file -->
<script src="dist/bundle.js" defer></script>
```

Then after compiling the code (`tsc -w`), all the code goes into the `bundle.js` file.

<br>

You can (or should) also keep your files in separate folders to group them, and then import them with the correct path:

```ts
// in each item: (e.g. base-component.ts):
namespace App {
  export class SomeClass {...}
  // ...code...
}

// in another item (not the base-component file), import the base component:
/// <reference path="base-component" />
namespace App {
  export class SomeClass {...}
  // ...code...
}

```

```ts
// app.ts - in this file you only import namespaces

// importing namespaces:
/// <reference path="dir/my-interfaces.ts" />

// for example:
/// <reference path="utils/validate.ts" />
/// <reference path="decorators/autobind.ts" />

// import all files from components directory:
/// <reference path="components/base-component.ts" />
/// <reference path="components/item.ts" />
/// <reference path="components/etc.ts" />

// ... code
```

If you want to possibly improve it - so you won't be importing
all of the files in (one file) the app.ts file, you then
should do separate imports in respective files that need
those imports, for example:

```ts
// project-item.ts
// would need those:
/// <reference path="components/base-component.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../modules/project.ts" />
/// <reference path="../modules/etc.ts" />
```

This is optional though.

<br><br>

### **Using ES Modules** <span id="a1002"></span><a href="#top10">&#8593;</a>

<br>

#### **Configuration**:

<br>

To use ES Modules change the `tsconfig.json`:

```json
{
  "compilerOptions": {
    /* ... */
    "target": "es6" /* or higher */,
    "module": "es2015"
    /* ... */
  }
  /* comment out: */
  /* "outFile": "./dist/bundle,js", */
}
```

In the html file, add the `type="module"` attribute to the script tag:

```html
<script type="module" src="dist/app.ts"></script>
```

<br>
<br>

```ts
// sample-interface.ts:

export interface Data {
  // ...
}

export interface Data2 {
  // ...
}
```

```ts
// another-file.ts

// import an interface:
import { Data } from "../path/sample-interface.js"; // (.js - compiled)
```

<br>

Import Component module into files that need it:

```ts
// project-item.ts
// import the base/root component
import { Component } from './base-component.js';

// import other stuff
import { Validation, validate } from '../utils/validation.js';
import { autobind } from '../decorators/autobind.js';

// ...project-item code...
export class SomeClass { ... };
```

Importing stuff relatively:

```ts
import { Component } from "./xyz.js"; // .js because it's compiled
```

<br>

In the base-component/root component file - import all the components

```ts
import { ProjectItemOne } from "./components/project-item-one.js";
import { ProjectItemTwo } from "./components/project-item-two.js";

// ...
```

<br><br>

### **Understanding various Import & Export Syntaxes** <span id="a1003"></span><a href="#top10">&#8593;</a>

<br>

Grouping imports:

```ts
import * as Validation from '..util/validation.js';
// import everything as Alias

// Then you call it like an object:
Validation.Validatable = { ... };

Validation.validate();
```

<br>

You can also assign Alias like this:

```ts
import { autobind as AutoBind } from "../decorators/autobind.js";

@AutoBind
x() { ... }
```

<br>

Default export (custom naming when importing):

```ts
// base-component.ts:
export default class Component<T> { ... }

// project-item.ts
// import the default export of base-component.ts
import Component from './base-component.js';
```

Not recommended to do.

<br>

<a href="https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b">JavaScript Modules (Overview)</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">More on ES Modules</a>

<br>

#### Note: Imported file/code runs only once, even if it's imported in many different files.

<br><br>

<hr>

<br><br>

## **Section 11: Using Webpack with TypeScript** <a href="#nav">&#8593;</a> <span id="top11"></span>

<br>

1. <a href="#a1100">What is Webpack & Why do we need it?</a>
2. <a href="#a1101">Installing Webpack & Important Dependencies</a>
3. <a href="#a1102">Adding Entry & Output Configuration</a>
4. <a href="#a1104">Finishing the Setup & Adding webpack-dev-server</a>
5. <a href="#a1105">Adding a Production Workflow</a>

<br><br>

<br>

<br><br>

### **What is Webpack & Why do we need it?** <span id="a1100"></span><a href="#top11">&#8593;</a>

<br>

The disadvantage of using ES6 Modules (splitting your code into separate files): Too many HTTP requests which is slowing down our app.

<br>

The solution: Webpack.

<br>

Webpack: <a href="webpack.js.org">Webpack.js.org</a>

<br>

#### What is Webpack?

- Webpack is a Bundling & "Build Orchestration" Tool
  - It's a tool that helps us reduce the HTTP requests by bundling code together,
    so that we can write code split up across multiple files,
    but Webpack then takes all these files and bundles them together.
  - In addition Webpack is capable of doing more - it will also optimize our code and will also allow us
    to add more build steps/tools

| "Normal" Setup:                                      | With Webpack                                     |
| ---------------------------------------------------- | ------------------------------------------------ |
| - Multiple .ts files & imports (Http requests)       | Code bundles, less imports required              |
| - Unoptimized code (not as small as possible)        | Optimized (minified) code, less code to download |
| - "External" development server needed (lite server) | More build steps can be added easily             |

<br><br>

### **Installing Webpack & Important Dependencies** <span id="a1101"></span><a href="#top11">&#8593;</a>

<br>

Install the dependencies:

`npm install --save-dev web webpack webpack-cli webpack-dev-server typescript ts-loader`

<br>

A good practice is to install a copy of TypeScript on each project,
so you'll have a specific TypeScript version. The advantage is, is when
you ever change your global TypeScript version, you won't break your
project setup if there were breaking changes in TypeScript itself.
So you lock-in a specific TS version in your project.

<br><br>

webpack + ts-loader: webpack can compile TS into JS,

<br>

webpack-dev-server + lite-server: running the app & applying changes

<br>

Webpack then bundles all the files into one code

<br><br>

### **Adding Entry & Output Configuration** <span id="a1102"></span><a href="#top11">&#8593;</a>

<br>

#### Project Configuration

```json
/* tsconfig.json */
{
  "compilerOptions": {
    "target": "es6" /* or es5 */,
    "module": "es2015" /* or es5 */,
    "outDir": "./path" /* specify output directory */
  },
  /* ... */
  "sourceMap": true
}
```

<br>

```js
// webpack.config.js
const path = require('path');

module.exports = {
  // specify the root file:
  entry: "./src/app.ts",
  output: {
    // create hash for every build, can help with caching in the browser
    // filename: 'bundle.[contenthash].js'
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'); // absolute path
  },
};
```

**Note**: When using Webpack, you have to remove .js extension from imports,
e.g. `import Component from './base-component';`.

<br><br>

### **Adding TypeScript Support with the ts-loader Package** <span id="a1103"></span><a href="#top11">&#8593;</a>

<br>

```js
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // entry - it tells webpack that there will be generated source maps
  // it allows to wire up correctly to the bundle it generates
  // it improves the development experience
  devtool: "inline-source-map",
  // specify what to do with TS files:
  module: {
    rules: [
      {
        test: /\.ts$/, // regex - check files that end with .ts
        use: "ts-loader", // what to do with those files - ts-loader handles it
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // look for .ts and .js files:
    extensions: ["ts", ".js"],
  },
};
```

Set `"sourceMap": true` in `tsconfig.json` - it will help us debug our code.

<br>

Using Webpack:

```json
/* package.json */
{
  "scripts": {
    /* ... */
    "build": "webpack"
  }
}
```

Now build the app: `npm run build`. There should be bundle.js file in dist dir.

<br>

import the script file, and run the app the app: `npm start`.

<br><br>

### **Finishing the Setup & Adding webpack-dev-server** <span id="a1104"></span><a href="#top11">&#8593;</a>

<br>

```json
/* package.json */
{
  "scripts": {
    /* ... */
    "start": "webpack-dev-server"
  }
}
```

<br>

```js
// webpack.config.js

/* ... */
module.exports = {
  // set the development mode
  mode: "development",
  entry: "./src/app.ts",
  output: {
    // specify the output path
    publicPath: "dist", // it detects changes and rebuilds/recompiles the app
  },
  /* ... */
};
```

<br><br>

### **Adding a Production Workflow** <span id="a1105"></span><a href="#top11">&#8593;</a>

<br>

Install plugins - clear up the dist folder whenever we re-build our project:

`npm install --save-dev clean-webpack-plugin`

<br>

```js
// webpack.config.prod.js
const path = require("path");
const ClearnPlugin = require("clean-webpack-plugin");

module.exports = {
  // set the production mode
  mode: "production",
  entry: "./src/app.ts",
  output: {
    // publicPath: "dist",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["ts", ".js"],
  },
  // apply to the whole project
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
```

<br>

```json
/* package.json */
{
  "scripts": {
    /* ... */
    "build": "webpack --config webpack.config.prod.js"
  }
}
```

Now if you run `npm run build` it will build the project in production mode,
and this file (`bundle.js`) together with your `index.html` file and the `app.css` file
is what you would put onto a server if you want to deploy your application.

<br><br>

<hr>

<br><br>

## **Section 12: 3rd Party Libraries & TypeScript** <a href="#nav">&#8593;</a> <span id="top12"></span>

<br>

1. <a href="#a1200">Using JavaScript (!) Libraries with TypeScript</a>
2. <a href="#a1201">No Types Needed: class-transformer</a>
3. <a href="#a1202">TypeScript-embracing: class-validator</a>

<br><br>

<br>

<br><br>

### **Using JavaScript (!) Libraries with TypeScript** <span id="a1200"></span><a href="#top12">&#8593;</a>

<br>

Utility library: <a href="https://lodash.com">Loadash</a>

There you can find how to install it, you can use npm: `npm i --save loadash`

```ts
// app.ts:
import _ from "loadash";

console.log(_.shuffle([1, 2, 3]));
```

It won't work since Loadash uses JavaScript not TypeScipt,

<br>

To make it work install the Loadash types: `npm install --save-dev @types/loadash`

<br>

DefinitelyTyped GitHub repository: https://github.com/DefinitelyTyped/DefinitelyTyped,

It's a huge repostory with tons of translations with all kinds of 3rd party libraries,
for example here's the loadash dir: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash

<br>

The files inside of that repository contain instructions for TypeScript,
to tell Typescript how something works and what's included in this package.

<br>

You can do that with any library, for example look for `jquery types`:

https://www.npmjs.com/package/@types/jquery

<br><br>

#### Using "declare" as a "Last Resort"

```html
<script>
  var GLOBAL = "abc";
</script>
```

```ts
declare var GLOBAL: any;

console.log(GLOBAL):
```

<br><br>

### **No Types Needed: class-transformer** <span id="a1201"></span><a href="#top12">&#8593;</a>

<br>

```ts
// product.model.ts
export class Product {
  title: string;
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}
```

Manually transforming an array of objects:

```ts
// app.ts
import { Product } from "./product.model";

// products - data from backend
const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

// const p1 = new Product("A Book", 12.99);

const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
```

<br>

It can be easier with Class-Transformer:

`npm install class-transformer --save`

`npm install reflect-metadata --save`

then:

`import "reflect-metadata";`

<br>

`import { plainToClass } from 'class-transformer';`

<br>

```ts
// app.ts
import { Product } from "./product.model";

// const loadedProducts = plainToClass(ClassToTransform, DataToTransform);
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
```

<br><br>

### **TypeScript-embracing: class-validator** <span id="a1202"></span><a href="#top12">&#8593;</a>

<br>

https://www.npmjs.com/package/class-validator

<br>

```ts
// product.model.ts
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validatior';
import { validate } from 'class-validatior';

export class Product {
  @IsNotEmpty()
  title: string;
  @IsNumber()
  @IsPositive()
  price: number;

  const newProd = new Product('', -5.99);
  validate(newProd).then(errors => {
    if (errors.length > 0) {
      console.log('VALIDATION ERRORS!');
      console.log(errors);
    } else {
      console.log(newProd.getInformation());
    }
  });
}
```

<br><br>

<hr>

<br><br>
