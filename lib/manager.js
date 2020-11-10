const employee = require('./employee');

class manager extends employee {
  constructor(officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.passengers = passengers;
  }

  
  checkRole()  {
    return "manager";
     };
getOfficeNumber() {
  return this.officeNumber
}
};
module.exports = manager;

