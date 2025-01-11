/**
 * (1) Create an array method that calculates the average for an array of numbers.
 * @throws {Error} If not all elements are numbers.
 * @returns {number} The average of the numbers in the array.
 */
Array.prototype.average = function (){
    if(!this.every(e=>typeof e==='number')) throw new Error("All elements must be numbers");
    return this.length===0 ? 0 : this.reduce((a,b)=>a+b, 0) / this.length;
}

try {
    const numbers = [1, 2, 3, 4];
    console.log(`average: ${numbers.average()}`);
} catch (e) {
    console.error(e.message);
}
/********************************************************* (1) *********************************************************/
/**
 * (2.a) Change the default output for all objects to be 'This is an object'.
 * @returns {string}
 */
Object.prototype.toString = function () {
    return 'This is an object';
}
const obj1 = {};
console.log(`output1: ${String(obj1)}`);

/**
 * (2.b) Make String(obj) of only the following object return the content of the message while the all other objects still return 'This is an object'.
 * @returns {string}
 */
const obj2 = {
    message: 'This is a message',
    toString: function () {
        return this.message;
    }
};
console.log(`output2: ${String(obj2)}`);
/********************************************************* (2) *********************************************************/

/**
 * (3.a) Implement this using ES5 function constructors
 * @param {string} type - The type of the vehicle
 * @param {number} speed - The speed of the vehicle
 * @param {string} color - The color of the vehicle
 */
Vehicle.numOfVehicleInstances = 0;
function Vehicle (type, speed){
    if(Vehicle.numOfVehicleInstances>=50) throw new Error("Vehicle limit reached");
    this.type = type;
    this.speed = speed;
    this.start = function (){ return `${this.type} is starting at a speed of ${this.speed} km/h.` };
    this.stop = function (){ return `${this.type} has stopped.` };
    Vehicle.numOfVehicleInstances++;
}
function Car (type, speed, color){
    Vehicle.call(this, type, speed);
    this.color = color;
    this.drive = function (){ return 'The car is now driving.' };
}

try {
    var vehicle1 = new Vehicle("Vehicle1", 100);
    var vehicle2 = new Vehicle("Vehicle2", 200);
    var car1 = new Car("Car1", 300, "red");
    var car2 = new Car("Car2", 400, "blue");

    console.log(Vehicle.numOfVehicleInstances);
    console.log(vehicle1);
    console.log(vehicle2);
    console.log(car1);
    console.log(car2);
} catch (e){
    console.error(e.message);
}

/**
 * (3.b) Write a function that checks whether an object is an instance of Car using two different ways
 * @param {Object} value The value to check.
 * @returns {Boolean} True if the value is an instance of Car, false otherwise.
 */
function checksObjectIsInstanceOfCar(value) {
    return value instanceof Car; // Approach 1: Using the instanceof operator
    return Car.prototype.toString.call(value)==='[object Object]'; // Approach 2: Using the Object.prototype.toString.call() method
    return value!==null && typeof value==='object' && value.constructor===Car; // Approach 3: Using a combination of type-checking and the constructor property
}
console.log(`check car2 is an instance of Car: ${checksObjectIsInstanceOfCar(car2)}`);
/********************************************************* (3) *********************************************************/
