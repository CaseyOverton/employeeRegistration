class employee {
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }
  
    printInfo() {
      console.log(`This employee's name is ${this.name}!!`);
      console.log(`This employee has an id of ${this.id}`);
      console.log(`This employee's email address is: ${this.email}`)
      console.log(`Employer Role: ${this.role}`)
    }

    checkRole()  {
     return "employee";
      };

  }
  module.exports = Vehicle;
  