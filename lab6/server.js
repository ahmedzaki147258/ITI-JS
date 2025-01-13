/**
 * (1.a) Implement this using ES5 ES6 classes
 * @param {string} type - The type of the vehicle
 * @param {number} speed - The speed of the vehicle
 * @param {string} color - The color of the vehicle
 */
class Vehicle {
    static numOfVehicleInstances=0;
    constructor(type, speed){
        if(Vehicle.numOfVehicleInstances>=50) throw new Error("Vehicle limit reached");
        this.type = type;
        this.speed = speed;
        Vehicle.numOfVehicleInstances++;
    }
    start(){ return `${this.type} is starting at a speed of ${this.speed} km/h.` };
    stop(){ return `${this.type} has stopped.` };
}

class Car extends Vehicle {
    constructor(type, speed, color) {
        super(type, speed);
        this.color = color;
    }
    drive(){ return `${this.type} is driving at a speed of ${this.speed} km/h.` };
}

try {
    const vehicle1 = new Vehicle("Vehicle1", 100);
    const vehicle2 = new Vehicle("Vehicle2", 200);
    const car1 = new Car("Car1", 300, "red");
    const car2 = new Car("Car2", 400, "blue");

    console.log(Vehicle.numOfVehicleInstances);
    console.log(vehicle1.start());
    console.log(vehicle2);
    console.log(car1);
    console.log(car2.drive());
} catch (e){
    console.error(e.message);
}

/**
 * (1.b) Write a function that checks whether an object is an instance of Car using two different ways
 * @param {Object} value The value to check.
 * @returns {Boolean} True if the value is an instance of Car, false otherwise.
 */
function checksObjectIsInstanceOfCar(value) {
    return value instanceof Car; // Approach 1: Using the instanceof operator
    return value.constructor === Car; // Approach 2: Using the Constructor Property
}
const car = new Car("Car2", 400, "blue");
console.log(`check car2 is an instance of Car: ${checksObjectIsInstanceOfCar(car)}`);
/********************************************************* (1) *********************************************************/

const table = document.querySelector('table').getElementsByTagName('tbody')[0];
async function insertFn() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        for(let i=0;i<json.length;i++) {
            const newRow = table.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
            const cell6 = newRow.insertCell(5);
            const cell7 = newRow.insertCell(6); // button

            cell1.innerHTML = json[i].id;
            cell2.innerHTML = json[i].name;
            cell3.innerHTML = json[i].email;
            cell4.innerHTML = json[i].company.name;
            cell5.innerHTML = json[i].address.geo.lat;
            cell6.innerHTML = json[i].address.geo.lng;

            const button = document.createElement("button");
            button.innerText = "show posts";
            button.classList.add("btn", "btn-info");
            button.addEventListener('click', async () => {
                const response1 = await fetch("https://jsonplaceholder.typicode.com/posts");
                const response2 = await fetch("https://jsonplaceholder.typicode.com/comments");
                const json1 = await response1.json();
                const json2 = await response2.json();
                const posts = json1.filter(post => post.userId===json[i].id);
                const commentCounts = {};
                json2.forEach(comment => {
                        if(commentCounts.hasOwnProperty(comment.postId)) commentCounts[comment.postId]++;
                        else commentCounts[comment.postId] = 1;
                });
                const postDetails = posts.map(post=>({
                    title: post.title,
                    numOfComments: commentCounts[post.id] || 0
                }));
                openDialog(postDetails);
            });
            cell7.appendChild(button);
        }
    } catch (e) {
        console.error(e.message);
    }
}
function openDialog(postDetails) {
    const dialog = document.getElementById("dialog");
    const overlay = document.getElementById("dialog-overlay");
    const dialogText = document.getElementById("dialog-text");
    postDetails.forEach(post=>{
        const li = document.createElement("li");
        li.innerHTML = `
          <p>
            <strong>Title:</strong> ${post.title} <br>
            <strong>Comments:</strong> 
            <span style="color: red;">${post.numOfComments}</span>
          </p>
        `;
        dialogText.appendChild(li);
    });
    dialog.style.width = "50%";
    dialog.style.display = "block";
    overlay.style.display = "block";
}
function closeDialog() {
    const dialog = document.getElementById("dialog");
    const overlay = document.getElementById("dialog-overlay");
    dialog.style.display = "none";
    overlay.style.display = "none";
}

insertFn().then().then().finally();
/********************************************************* (2) *********************************************************/
