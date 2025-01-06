/**
 * [1] Write a function to calculate the sum of digits in a number.
 *
 * @param {number} num - The number whose digits' sum is to be calculated.
 * @returns {number} The sum of the digits of the input number.
 */
function sumOfDigits(num){
    return num.toString().split('').map(function(e){return +e}).reduce(function(a,b){return a+b}, 0);
}

var number;
while(true){
    number = prompt("Enter Number?").trim();
    if(number.length===0) alert("number must not be empty");
    else if(isNaN(number)) alert("number must be a number");
    else break;
}
var result = sumOfDigits(number);
document.getElementById("res").innerHTML = result;
console.log(result);
/********************************************************* (1) *********************************************************/

/**
 * [2] Write a function to calculate the number of vowels in a string.
 *
 * @param {string} text - The string whose vowels' count is to be calculated.
 * @returns {number} The number of vowels in the input string.
 */
function calculateNumberOfVowels(text){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var obj = {a: 0, e: 0, i: 0, o: 0, u: 0};
    text.split('').forEach(function(ele){
        if(vowels.includes(ele.toLowerCase())) obj[ele.toLowerCase()]++;
    });
    return obj;
}

var text;
while(true) {
    text = prompt("Enter text?").trim();
    if(text.length===0) alert("text must not be empty");
    else break;
}
var result = calculateNumberOfVowels(text);
document.getElementById("res").innerHTML = result;
console.log(result);
/********************************************************* (2) *********************************************************/

/**
 * [3] Write a function to calculate the number of occurrences of a character in a string.
 *
 * @param {string} ch - The character to count in the string.
 * @param {string} str - The string in which to count occurrences of the character.
 * @returns {number} The number of times the character appears in the string.
 */
function numberOfOccurancesOfCharacter(ch, str){
    var cnt=0;
    for(var c of str) if(c===ch) cnt++;
    return cnt;
}

var char, string;
while(true){
    char = prompt("Enter character?").trim();
    if(char.length!==1) alert("character must be a single character");
    else break;
}
while(true) {
    string = prompt("Enter string?").trim();
    if(string.length===0) alert("string must not be empty");
    else break;
}
var result = numberOfOccurancesOfCharacter(char, string);
document.getElementById("res").innerHTML = result;
console.log(result);
/********************************************************* (3) *********************************************************/

/**
 * [Bonus] Calculates age from date of birth.
 *
 * @param {string} dateOfBirth - The date of birth in the format "YYYY-MM-DD"
 * @returns {number} The age in years
 */
function calculateAgeFromDateOfBirth(dateOfBirth){
    var myYear = dateOfBirth.split('-')[0];
    var currYear = new Date().getFullYear();
    return currYear-myYear;
}

var dateOfBirth, regex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
while(true) {
    dateOfBirth = prompt("Enter date-of-birth?").trim();
    if(!regex.test(dateOfBirth)) alert("date-of-birth must be in format YYYY-MM-DD");
    else break;
}
var result = calculateAgeFromDateOfBirth(dateOfBirth);
document.getElementById("res").innerHTML = result;
console.log(result);
/******************************************************* (bonus) *******************************************************/
