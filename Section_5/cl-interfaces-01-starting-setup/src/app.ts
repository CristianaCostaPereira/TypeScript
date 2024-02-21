// Starts with an uppercase character to make it clear that is a class
class Department {
  name: string;

  constructor (n: string) {
    this.name = n;
  }
}

// create department object
const accounting = new Department('Accounting');

console.log(accounting);
