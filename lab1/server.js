/**
 * (1) write JavaScript function that checks whether the passed string is a palindrome or not
 *
 * @param {string} text
 * @return {boolean}
 */
function isPalindrome(text){
    var n = text.length;
    text = text.trim().toLowerCase();

    // way1
    for(var i=0;i<n/2;i++){
        if(text.charAt(i) !== text.charAt(n-i-1)) return false;
    }
    return true;

    // way2
    return text===text.split('').reverse().join('');
}
document.getElementById("res").innerHTML = isPalindrome(prompt("Enter text to test palindrome?"));
console.log(isPalindrome(prompt("Enter text to test palindrome?")));
/********************************************************* (1) *********************************************************/

/**
 * (2) write JavaScript function that accepts a price and discount as numbers and returns the dicounted price.
 *
 * @param {number|string} price
 * @param {number|string} discount
 * @returns {number} discounted price
 */
function calcDicountedPrice(price, discount){
    price = +price;
    discount = +discount;
    return price-price*discount/100;
}

var price, discount;
while(true) {
    price = prompt("Enter price?").trim();
    if(price.length===0) alert("Price must not be empty");
    else if(isNaN(price)) alert("Price must be a number");
    else break;
}
while(true){
    discount = prompt("Enter discount?").trim();
    if(discount.length===0) alert("Discount must not be empty");
    else if(isNaN(discount)) alert("Discount must be a number");
    else if(discount<0 || discount>100) alert("Discount must be in range [0,100]");
    else break;
}
document.getElementById("res").innerHTML = calcDicountedPrice(price, discount);
console.log(calcDicountedPrice(price, discount));
/********************************************************* (2) *********************************************************/

/**
 * (3) create an array with your favourite movies
 */
var myFavouriteMovies = ["Fast & Furious", "Extraction", "The Conjuring", "Expend4bles", "Jumanji"];
var copyOfMyFavouriteMovies = [];
for(var i=0;i<myFavouriteMovies.length;i++) copyOfMyFavouriteMovies.push(myFavouriteMovies[i]); // way1
var copyOfMyFavouriteMovies = myFavouriteMovies.slice(); // way2
var copyOfMyFavouriteMovies = [...myFavouriteMovies]; // way3(ES6)
myFavouriteMovies[2] = "The Avengers";
console.log(myFavouriteMovies[myFavouriteMovies.length-1]); // way1
console.log(myFavouriteMovies.slice(-1)[0]); // way2
console.log(myFavouriteMovies.at(-1)); // way3
console.log(myFavouriteMovies.findLast(()=>true)); // way4
copyOfMyFavouriteMovies.unshift("The Dark Knight");
console.log(myFavouriteMovies);
console.log(copyOfMyFavouriteMovies);
/********************************************************* (3) *********************************************************/

/**
 * (4) Write a function that accept a sentence and return the longest word
 *
 * @param {string} text
 * @returns {string} the longest word in the text
 */
function findLongestWord(text){
    var maxWord = new String();
    var splitedWords = text.split(" ");
    for(var word of splitedWords){
        if(word.length > maxWord.length) maxWord = word;
    }
    return maxWord;
}

var text;
while(true) {
    text = prompt("Enter text?").trim();
    if(text.length===0) alert("text must not be empty");
    else break;
}
document.getElementById("res").innerHTML = findLongestWord(text);
console.log(findLongestWord(text));
/********************************************************* (4) *********************************************************/

/**
 * (5) Create a function that takes the following:
 *
 * @param {string} name - user name
 * @param {string} grades - grades as a string in the format "grade1,grade2,..."
 */
function showNameAndGrades(name, grades){
    console.log(`welcome ${name}`);
    grades = grades.split(',');
    grades = grades.map(g=>+g);
    grades = grades.map((g, idx) => ({ grade: `grade${idx+1}`, score: g }));
    console.table(grades, ['grade', 'score']);
    var avg = grades.reduce((a,b)=>a+b.score, 0) / grades.length;
    console.log(`average grade: ${avg.toFixed(2)}`);
}

var studentName, grades;
while(true){
    studentName = prompt("Enter student-name?").trim();
    if(studentName.length===0) alert("student-name must not be empty");
    else break;
}
while(true){
    grades = prompt("Enter grades?").split(" ").join("");
    if(grades.length===0) alert("grades must not be empty");
    else if (!grades.split(',').every(g=> !isNaN(g) && g.trim()!=='')) alert("All grades mustbe numbers separated by commas");
    else break;
}
showNameAndGrades(studentName, grades);
/********************************************************* (5) *********************************************************/

/**
 * (6) Each object represents an e-commerce order and contains details in the following format
 */
var orders = [
    {
      orderId: 'ORD001',
      customer: 'John Doe',
      items: 'item1:2,item2:1,item3:5',
      orderDate: '2023-12-01',
      deliveryDate: '2023-12-05',
      deliveryAddress: '123, Main Street, Springfield, USA',
    },
    {
      orderId: 'ORD002',
      customer: 'Jane Smith',
      items: 'itemA:3,itemB:4',
      orderDate: '2023-11-15',
      deliveryDate: '2023-11-20',
      deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
    },
    {
      orderId: 'ORD003',
      customer: 'Alice Johnson',
      items: 'itemX:1',
      orderDate: '2023-10-10',
      deliveryDate: '2023-10-15',
      deliveryAddress: '456, Pine Lane, Denver, USA',
    }
];

var formattedOrders = orders.map(obj=>({
    orderId: obj.orderId,
    customer: obj.customer,
    totalItems: obj.items.split(',').map(e=>+e.split(':')[1]).reduce((a,b)=>a+b, 0),
    orderDate: obj.orderDate,
    deliveryDate: obj.deliveryDate,
    deliveryDuration: (new Date(obj.deliveryDate) - new Date(obj.orderDate)) / (1000*60*60*24),
    deliveryCountry: obj.deliveryAddress.split(',')[3],
    deliveryCity: obj.deliveryAddress.split(',')[2],
    deliveryStreet: obj.deliveryAddress.split(',')[1],
    buildingNumber: obj.deliveryAddress.split(',')[0]
}));
console.table(formattedOrders);
/********************************************************* (6) *********************************************************/
