// const arrowFunc = () => "intechgration"
// arrowFunc();


// HOW TO REVERSE JOIN AND SPLIT A STRING
// function keyWord(word) {
//     return console.log(word.split("").reverse().join(""))
// }
// keyWord("intechgration")

// REVERSE ,SPLIT, JOIN STRINGS
// function reverseString(text) {
//     return text.split('').reverse().join("");
// }
// console.log(reverseString("intechgration"));

// HOW TO REVERSE THE STRING IN JAVASCRIPT
var myVar = setInterval(myFunction, 1000); 
            
var word = 'intechgration';
var newArray = word.split('');

function myFunction() {
var letter = newArray.pop();
var newWord = newArray.unshift(letter);
var theWord = newArray.join('');
console.log(theWord);
document.getElementById('rotate').innerHTML = theWord;
}
