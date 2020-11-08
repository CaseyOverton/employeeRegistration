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



// const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengerLength();
