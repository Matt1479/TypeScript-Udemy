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

Add an exclamation mark to let TypeScript know that this is a element, that will never yield NULL

<br>

### **Project setup for future sections**

Installing lite server:

npm init
npm install --save-dev lite-server

Then add this to package.json: "start": "lite-server"

npm start

It works the same as Live Server

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
Truthy: every other number than 0 unless it's defined as falsy.

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

Type Inference = TypeScript automatically asigns types e.g.: `let x = 5;` will be type of number

<br>

Don't assign a type if it can be infered by TypeScript.

<br>

**Object Types**

#### Type **object**

[ { age: 30 } ]

Any JavaScript object, more specific types (type of object) are possible.

A TypeScript object can have a type same as his attributes and methods.

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

**Arrays Types**

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
