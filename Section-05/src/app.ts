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

// console.log(accounting);
// output:
// Object { name: "Accounting" }
// name: "Accounting"

accounting.describe();
// output: Department: Accounting

const accountingCopy = { name: "s", describe: accounting.describe };

// output: Department: undefined
// why? because it only points to the method, it doesn't provide arguments!
accountingCopy.describe();
