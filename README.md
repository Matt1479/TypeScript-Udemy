# TypeScript-Udemy

Learning TypeScript from Udemy course.

Below you can find my notes:

## **Section 01**

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
<br><br>

## **Section 02**

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

You create your own types:

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
