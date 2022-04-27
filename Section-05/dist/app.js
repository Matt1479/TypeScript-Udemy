"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
}
// creating instance of a class - object
const accounting = new Department("Accounting"); // constructor arguments inside of ()
console.log(accounting);
// output:
// Object { name: "Accounting" }
// name: "Accounting"
