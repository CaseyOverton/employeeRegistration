class Employee {
    constructor(name, id, email) {
      this.name = name; 
      this.id = id;
      this.email = email;
    }
  
    printInfo() {
      console.log(`This employee's name is ${this.name}!!`);
      console.log(`This employee has an id of ${this.id}`);
      console.log(`This employee's email address is: ${this.email}`)
      console.log(`Employer Role: ${this.role}`)
    }


    getName() {
      return this.name
    }

    getId() {
      return this.id;
    }
    getEmail() {
      return this.email
    }
    getRole()  {
     return "Employee";
      };

  }
  module.exports = Employee;
  