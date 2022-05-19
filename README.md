# TypeScript-Udemy Notes

## **Section 01: Getting Started**

### What is TypeScript?

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

### **Project setup for future sections**

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

## **Section 02: TypeScript Basics & Basic Types**

**Using Types**

<br>

### **Core Types**

#### Type **number**

[ 1, 5.3, -10, etc ]

All numbers, no differentation between integers or floats.

#### Type **string**

[ 'Hi', "Hi", \`Hi\` ]

All text values

The \`\` quotes are used for template literals

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

**Object Types**

#### Type **object**

[ { age: 30 } ]

Any JavaScript object, more specific types (type of object) are possible.

A TypeScript object can have the same type as his attributes and methods.

<br>

Assigning an object type(explicitly!) to a constant:

```
const person: {
  name: string;
  age: number;
} = {
  name: "Mark",
  age: 24,
};
```

But it's better to let TypeScript infer the type:

```
const person = {
  name: "Mark",
  age: 24,
};
```

**Nested Object & Types**

Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

```
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
```

This would be the type of such an object:

```
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

**Array Types**

#### Type **array**

[1, 2, 3]

Any JavaScript array, type can be flexible or strict (regarding the element types)

Declaring a string array: `let strarr: string[];`

<br>

<a href="https://www.w3schools.com/jsref/jsref_map.asp">map()</a> JavaScript method: creates a new array from calling a function for every array in element.

<br>

**Working with Tuples**

#### Type tuple

[1, 2] `// fixed type number / fixed length: 2 elements`

Tuple type is a fixed type + fixed length

<br>

Added by TypeScript: Fixed-length array

Tuple is good to use when you have exactly x amount of elements in an array and you know the type of each value in advance. In that case you should use tuple type instead of an array since it adds more strictness into the app.

<br>

#### type enum

enum { NEW, OLD }

Added by TypeScript: Automatically enumerated global constant identifiers

example of enum syntax: `enum Role { ADMIN, READ_ONLY, AUTHOR }` (it's gonna increment starting from 0 (ADMIN))

<br>

#### type any

[ * ]

Any kind of value, no specific type assignment

Avoid this type at all costs.

<br>
<br>

**Union Types**

sample syntax:

```
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

<br>

**Literal Types**

Exact value, like `const number2 = 2.8;`, so it's not just a number, but a specific number

or `const someString = 'string';`

Adding a + in front of each variable converts it into a number type: `return +num1 + +num2; // this is going to be a type of number`

<br>

**Type Aliases / Custom Types**

With Aliases you can create your own types:

`type Combinable = number | string;` (and any type setup, including literal types etc)

It could save some extra code.

**Type Aliases & Object Types**

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type. For example:

`type User = { name: string; age: number };`
`const u1: User = { name: 'Max', age: 30 }; // this works!`

This allows you to avoid unnecessary repetition and manage types centrally.

For example you can simplify this code:

```
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

To:

```
type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

<br>

**Function Return Types & "void"**

function return types:

```
function add(n1: number, n2: number): number { // <- explicitly return assigning type
  return n1 + n2;
}
```

void-type function (procedure, a function that doesn't have a `return` keyword):

```
function printResult(num: number): void { // explicitly assigning a void type, normally TypeScript would infer that type
  console.log("Result: " + num);
}
```

**Functions as Types**

```
combineValues = add; // add() is a function

console.log(combineValues(8, 8));
```

You can store a pointer to a function inside a variable.

<br>

Assigning Function Type(but without typing):

`let combineValues: Function;`

<br>

Assigning a Function Type with Typing:

`let combineValues: (a: number, b: number) => number;`

Now `combineValues` should accept any function that takes 2 parameters where each parameter is a number and where the function overall then returns a number.

```
combineValues = add;
combineValues = printResult; // this will throw an error of course!
```

**Function Types & Callbacks**

(A JavaScript callback is a function which is to be executed after another function has finished execution)

Let's create this function:

```
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result); // cb == callback
}
```

And call this function:

```
addAndHandle(10, 20, (result) => {
  console.log(result);
});
```

In that case parameters are enforced and the return type isn't (since it's a void/procedure).

<br>

Callback functions can return something even if the argument on which they're passed does not expect a returned value.

<br>
<br>

**The "unknown" type**

`let userInput: unknown;`

`unknown` type is different to `any` type,
it's better to use `unknown` type over `any` type, because you atleast have _some_ type checking

for example, in this case we don't know if the userInput is going to be string or a number, so we assign a `unknown` type:

```
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "str";

// this needs extra type checking, otherwise it'll throw an error
if (typeof userInput === "string") {
  userName = userInput;
}
```

So `unknown` shouldn't be really used, but it's better than type `any`. Usually you'd just use Union type or Alias type.

<br>

**The "never" Type**

The "never" function type never returns any values:

```
function generateError(message: string, code: number): never {
  throw { errorMessage: message, errorCode: code };
}

generateError("An error occured", 500);
```

Having utility functions like this can be pretty useful in bigger applications, where you wouldn't manually throw an error in 10 different places of your app, but where you want to reach out to one convenient function that builds the error object. So you can call this function with different inputs whenever you'd want to throw an error.

<br><br>

<hr>

<br><br>

## **Section 03: The TypeScript Compiler (and its Configuration)**

**Module Introduction**

**Using "Watch Mode"**

`tsc app.ts -w`

or

`tsc app.ts --watch`

Don't quit this watch mode process whilst developing. You can quit thereafter via `CTRL + C`.

**Compiling the Entire Project / Multiple Files**

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

**Including & Excluding Files**

Exclude files in the `tsconfig.json` file:

```
  "exclude": [
    "filename.ts"
  ]
```

you can use wildcards:

```
  "exclude": [
    "*.dev.ts"
  ]
```

Include files in the `tsconfig.json` file:

```
"include": [
  "app.ts",
  "someFolder"
]
```

Include individual files:

```
"files": [
  "someFile.ts"
]
```

**Setting a Compilation Target**

In the `"compilerOptions: {}" (in the tsconfig.json) file we can set up how our TypeScript code is compiled. So not only which files are going to be compiled, but also how the files that are going to be compiled are treated by TypeScript.

**`"target"`**: which JS version you want to compile the code into.

("es5" == var)
("es6+" == let, const etc)

The newer the version is the better the code is (more concise).

<br>

**`"lib"`**: library files (for example you use es5 and want some es6 features(API))

for example:

```
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

**Strict options**

**`"strict: true"`**: sets all the strict options to true

**`"noImplicitAny"`**: ensures that we have to be clear about parameters/values that we're working with in our code.

**`"strictNullChecks"`**: allow potentially null falues (if you set it to false)

**`"strictBindCallApply"`**: it helps working with the `call()`, `bind()`, `apply()` methods (easier error finding)

**`"strictPropertyInitialization"`** & **`"strictFunctionTypes"`** is useful for working with classes and objects and so on.

**`"alwaysStrict"`**: always use strict in JS files (if set to true)

<br>

**Code Quality Options**

Additional checks

`noUnused(Locals/Parameters)`: TS is gonna throw an error if you have unused variables, paramters etc.

`noImplicitReturns`: TS is gonna throw an error if for example a function should return something, but it doesn't return anything.

<br>

SourceMapOptions: extra file options (rootDir, outDir), typically you leave it as it is.

For more check the <a href="https://www.typescriptlang.org/docs/handbook/intro.html">documentation</a>

<br>

**Debugging with Visual Studio Code**

Start debugging inside of VS Code:

F5

or

CTRL + SHIFT + D

<br>

#### **Useful Resources & Links**

Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.

These links might also be interesting:

<a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html">tsconfig Docs</a>

<a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html">Compiler Config Docs</a>

<a href="https://code.visualstudio.com/docs/typescript/typescript-debugging">VS Code TS Debugging</a>

<br><br>

<hr>

<br><br>

## **Section 04: Next-generation JavaScript and TypeScript**

<br>

Supported JS/TS <a href="https://kangax.github.io/compat-table/es6/">features</a> in different browsers.

<br>

### **Arrow Functions**

The syntax:

```
const add = (a: number, b: number) => {
  return a + b;
}
```

<br>

**Default Function Parameters**

set default function parameters last.

<br>

**The Spread Operator**

```
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// you can also copy values when creating a new arrays:
const activeHobbies = ["Hiking", ...hobbies]; // this will push "Sports" and "Cooking" into that array

activeHobbies.push(...hobbies); // ... - spread operator

// result:
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

```
const person = {
  name: 'Mark',
  age: 28
};

const copiedPerson = { ...person }; // copying the person object
```

So what it does is it pulls out all the values and puts them into the new constant (copies them).

<br>

**Rest Parameters**

```
// rest operator == flexible functions

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

Copying **Arrays**:

1. the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">`slice()`</a> method:

```
let hobbies = ['Sports', 'Cooking'];
let copiedHobbies = hobbies.slice();
```

It basically returns a new array which contains all new elements of the old element, starting at the starting index you passed (and then up to the max number of elements you defined). If you just call **`slice()`** method, without arguments, **you get a new array with all elements of the old array**.

<br>

2. The <a href="https://developer.mozilla.org/en-US/docs/web/javascript/reference/operators/spread_syntax">spread</a> operator (...)

If you're using ES6+, you can use the spread operator.

```
let hobbies = ['Sports', 'Cooking'];
let copiedHobbies = [...hobbies];
```

<br>

Copying **Objects**:

1. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">`Object.assign()`</a>

You can use the `Object.assign()`.

```
let person = { name: 'Mark' };
let copiedPerson = Object.assign({}, person);
```

This syntax creates a new object (the {} part) and assigns all properties of the old object (the second argument) to that newly created one. This creates a copy.

<br>

2. Just as with arrays, you can also use the spread operator on objects:

```
let person = { name: 'Mark' };
let copiedPerson = { ...person };
```

This will also create a new object (because you used { } ) and will then pull all properties of `person` out of it, into the brand-new objects.

<br>

More about cloning strategies <a href="https://redux.js.org/usage/structuring-reducers/immutable-update-patterns#immutable-update-patterns">here</a> (copying nested arrays, objects etc).

<br>
<br>

**Array & Object Destructing**

Arrays:

```
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// destructure = pulling elements of out the array, in this case into separate constants
const [hobby1, hobby2] = hobbies;
// basic syntax: const [] = arrToDestructure;

console.log(hobbies, hobby1, hobby2);
// output: Array ["Sports", "Cooking"] "Sports" "Cooking"
```

Objects:

```
let person = {
  fName: "Mark",
  age: 27,
};

const { fName, age } = person; // the values should be the same

console.log({fName, age}, person );
// output: Object { fName: "Mark", age: 27 } Object { fName: "Mark", age: 27 }

// overwriting the name of the values:
const { fName: userName, age } = person;
console.log(userName, age); // changed the fName value to userName (this is JS syntax)
```

<br><br>

<hr>

<br><br>

## Section-05: Classes & Interfaces

<br>

_Classes & Instances_

Objects: instances of classes == based on classes

Classes: blueprints for objects

<br>

<small>(npm start & tsc -w)</small>

**Creating a Class**

```
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

// creating instance of a class - object
const accounting = new Department("Accounting"); // constructor arguments inside of ()

console.log(accounting);
// output:
Object { name: "Accounting" }
name: "Accounting"
```

<br>

**Compiling to JavaScript**

In ES6 the code is almost the same (except for types of course),
below ES6 there's a lot of differences, for example constructor functions.

<br>
<br>

**JavaScript this keyword**

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

**Constructor Functions & The "This" Keyword**

**This** keyword typically refers to a concrete instance of a class that was created and with the dot notation you can access all the properties and methods of this instance (here this.name).

```
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // providing a "hint" for TypeScript (about what "this" is):
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  // this iside of describe() should always refer to an instance that's based
  // on the Department class, so an object which will be type of Department
}

// creating instance of a class - object
const accounting = new Department("Accounting"); // constructor arguments inside of ()

accounting.describe();
// output: Department: Accounting

const accountingCopy = { name: "s", describe: accounting.describe };

// output: Department: undefined
// why? because it only points to the method, it doesn't provide arguments!
accountingCopy.describe();

```

<br>

**"private" and "public" Access Modifiers**

private = accessible only within a class

public = accessible everywhere

<br>

private properties, public methods (usually with validation) to modify those properties.

**"readonly" keyword**

the name is self-explanatory, after initialization you can't change it's value, for example an id should be readonly.

<br>
<br>

**Inheritance**

The syntax:

`class SubClass extends BaseClass {}`

The `SubClass`(child) inherits everything from the `BaseClass`(parent), even the `constructor()`

<br>

Whenever you want to use properties from the `BaseClass`, inside of `SubClass`, you have to add the `super()` method into the sub class' constructor. The `super()` method is used to get the properties of the base class.

```
class SubClass extends BaseClass {
  constructor(args: string) {
    super(args);
  }
}
```

<br>

private methods/properties in base class are not accessible in sub class.

<br>

**Getters and Setters**

Getter Syntax:

```
get someValueGetter() {
  if (this.someProperty) {
    return this.someProperty;
  }
}
```

A getter always returns something

<br>

Setter Synax:

```
get someValueSetter(value: type) {
  if (!value) {
    throw new Error('Invalid value!');
  }
  this.addSomething(value);
}
```

<br>

**Static Methods & Properties**

Those are used to modify classes without needing to instantiate it (e.g `Math` class (`Math.random()` etc)). So no need to use the `new` keyword in order to modify a class.

<br>

Syntax:

```
static createEmployee(name: string) {
  return { name: name };
}

const employee1 = Department.createEmployee('Mark');
```

Though you can't access static properties/methods inside the class inside properties/methods that aren't static.

<br>

**Abstract Classes**

Syntax:

`abstract someMethod(this: SomeClass): void;`

<br>

Abstract Classes = polymorphism

<br><br>
<br><br>

## **Interfaces**

<br><br>

1. <a href="#intdef">Interface definition.</a>
2. <a href="#intcls">Using interfaces with Classes.</a>
3. <a href="#whyint">Why Interfaces?</a>
4. <a href="#optparam">Optional Paremeters & Properties</a>

<br><br>

### **A First Interface**

<br>

<span id="intdef">What is an interface?</span>

Interface describes the structure of an object

<br>

Interface keyword exists only in TypeScript, here's how the syntax looks:

```
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Mark',
  age: 23,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name); // `this` in this case is a reference to the object
  }
}

user1.greet('Hi there - I am');
```

You use `interface` not as a blueprint, but as a custom type.

An `interface` can't have an initializer.

You only specify the head of a Method in an `interface` with the types and return type.

<br>

Summary:

`interface` allows us to **define** the **structure of an object**. We can use it **as a type** to type check for objects that must have this (`interface`'s) structure.

<br><br>

### **Using Interfaces with Classes** <span id="intcls"></span>

<br>

A class can implement `interface`'s features/properties and follow it's rules:

```
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// you can implement multiple interfaces
class Person implements Greetable, AnotherInterface {
  name: string;
  // you can add more properties to this class:
  age = 23;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name); // `this` in this case is a reference to the object
  }
}
```

The `Person` class has to meet the `Greetable` `interface`'s requirements, meaning it has to have the same properties and methods, but it also can have it's own properties and methods on top of that.

<br>

### **Why interfaces?** <span id="whyint"></span>

You can use `interfaces` to force a class to have particular properties and methods, so you can be sure that it will have those.

<br>

### **Optional Paremeters & Properties** <span id="optparam"></span>

You can define optional properties in interfaces and classes:

```
interface Named {
  outputName?: string;
}
```

The question mark before a type means that this property might exist in classes that implement this `interface`, but it doesn't have to.

<br>

You can also have optional methods.

```
interface Person {
  name: string;

  greet?(): void;
}
```

<br>

This works the same in classes:

```
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

1. <a href="#a0600">Intersection Types.</a>
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

Interseption types allow us to combine other types:

```
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

```
interface Admin {
  name: string;
  privileges: string[];
};

interface Employee {
  name: string;
  startDate: Date; // Date Type == JavaScript Date() Object
};

interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: 'Mark',
  privileges: ['create-server'],
  startDate: new Date();
}
```

<br>

This can be also achieved with Union types:

```
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // type Universal will be of type number
```

in Summary:

**Objects/Interfaces** = combination of those (of their properties)

**Union types** = the types they have in common

<br><br>

### **Type Guards** <span id="a0601"></span><a href="#top06">&#8593;</a>

Type guards help us with union types. They are used to know which exact type you're getting now, at a runtime.

Examples:

#### if (`typeof` x === 'someType') {}

```
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') { // type guard (if)
    return a.toString() + b.toString();
  }
  return a + b;
}
```

#### if (x `in` y)

```
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  // if 'privileges' property exists in emp (employee) then...
  if('privileges' in emp) {
  console.log('Privileges: ' + emp.privileges);
  }

  if('startDate' in emp) {
  console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);
// output: Name: ..., Privileges: ..., Start Date: ...
```

#### if (x `instanceof` y)

```
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

Type guards describes idea of checking if a certain property or method exists before you try to use it, or if you can do something with the type before you try to use it.

Objects: `instanceof`, `in`

other types: `typeof`

<br>
<br>

### **Discriminated Unions** <span id="a0602"></span><a href="#top06">&#8593;</a>

`Discriminated unions` is a pattern which you can use when working with `union types` that makes implementing `type guards` easier. It's available when you're working with `Object`s and `union types`.

```
interface Bird {
  // discriminated union - used to describe that interface/object
  type: 'bird'; // literal type
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // literal type
  runningSpeed: number;
}

type Animal = Bird | Horse;

function MoveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});
```

<br><br>

#### **Type Casting** <span id="a0603"></span><a href="#top06">&#8593;</a>

Type casting helps you tell TypeScript that some value is of a specific type where TypeScript is not able to detect it on it's own.

Example:

```
HTML:

<p></p>

(empty paragraph)

TS:

const paragraph = document.querySelector('p'); // == HTMLParagraphElement
```

In this case we could use innerText since TS knows that this is a HTMLParagraphElement.

<br>

Not in the case if it's a HTMLElement since TS doesn't know if this element could have innerText property.

<br>

`Type Casting`:

```
<input id="user-input">

// ! means that this element will never yield null
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

// this is TypeScript only feature, works differently in JSX

userInputElement.value = 'hello';
```

Another method of doing this:

```
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
```

Alternative without the exclamation mark:

```
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'hello';
}
```

<br><br>

#### **Index Properties** <span id="a0604"></span><a href="#top06">&#8593;</a>

```
interface ErrorContainer {
  // Index type:
  [prop: string]: string;
  // any property name which would be a string and the value which would also be a string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  // stringProperty: 'stringValue', as it's in the interface

  username: 'Must start with a capital character!'
}
```

Index type gives us extra flexibility so that we don't need to know in advance which property name we want to use, and how many properties we need.

<br><br>

#### **Function Overloads** <span id="a0605"></span><a href="#top06">&#8593;</a>

Function Overloads - a feature that allows us to define multiple function signatures for one and the same function, which simply means we can have multiple possible ways of calling a function with different parameters to then do something inside of that function.

<br>

Use it whenever TypeScript can't infer a type on it's own.

<br>

Example:

```
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // type Universal will be of type number

// we're telling TS: if we call this function and both arguments are number,
// then this function returns a number
// Function overload syntax:
function add(a: number, b: number): number;

function add(a: string, b: string): string;

// and the other possibilities:
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') { // type guard (if)
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Mark', ' Smith');
result.split(' ');
```

Overload basically means that there are other ways of calling this function.

<br><br>

#### **Optional Chaining** <span id="a0606"></span><a href="#top06">&#8593;</a>

Optional chaining is used when you're not sure whether a certain property on an object is set or if it's undefined.

For example we're fetching this data from backend:

```
const fetchedUserData = {
  id: 'u1',
  name: 'Mark',
  // job: { title: 'CEO', description: 'The CEO of the company'}
};

// JavaScript way:
console.log(fetchedUserData.job && fetchedUserData.job.title);

// TypeScript way - optional chaining
console.log(fetchedUserData?.job?.title);

This tells TypeScript:
if job property exists, then access job property,
if title property exists, then access title property
```

Optional chaining operator `fetchedUserData?.job?.title` helps us safely access nested properties and nested objects in our object data and if the thing in front of the question mark is undefined it will not access the thing that it's after and therefore will not throw a runtime error, but instead it will just not continue.

<small>
So basically behind the scenes it's compiled into an `if ()` check which checks whatever (`fetchedUserData` property) exists before it tries to access (`job` property).
</small>

<br><br>

#### **Nullish Coalescing** <span id="a0607"></span><a href="#top06">&#8593;</a>

Coalesce = connect / link / join / merge / mix / unite

<br>

Nullish Coalescing - a TypeScript feature which helps us deal with null-ish data.

<br>

The Nullish Coalescing operator: `??`

<br>

For example we'd want to treat `null` or `undefined` values differently (compared to for example `string`, `number` etc):

```
const userInput = '';

const storedData = userInput ?? 'DEFAULT';
```

`??` basically means: if this value is (only) `null` or `undefined` then use the `'DEFAULT'` fallback, if it's not `null` or `undefined`, then we'll use `userInput` value/fallback (option).

<br>

So console logging would look like this:

```
const userInput = '';
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);
//output: ''


const userInput = undefined;
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);
//output: DEFAULT
```

<br><br>

<hr>

<br><br>
