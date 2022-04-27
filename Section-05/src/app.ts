class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // describe() method - finish it later
}

// creating instance of a class - object
const accounting = new Department("Accounting"); // constructor arguments inside of ()

console.log(accounting);
// output:
// Object { name: "Accounting" }
// name: "Accounting"
