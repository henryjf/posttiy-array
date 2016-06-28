// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// -------------------------

var largest = [];

for ( i = 0; i <= largest; i++){
  if( largest < numbers[i]){
   largest = numbers[i];
  }
};
console.log(largest);


// ---------------------------
// 2. Find longest string
// ---------------------------
// var strings = ['this','is','a','collection','of','words'];

var word = [];

for ( var i = 0; i < strings.length; i++ ){
  if ( word < strings[i].length ) {
    word = strings[i].length;
    var longestWord = strings[i];
  }
};
console.log(longestWord);





// ---------------------------
// 3. Find even numbers
// ---------------------------
var num = [];
for ( var i = 0; i < numbers.length ; i++ ){
  if (numbers[i] % 2 === 0 ){
    num.push(numbers[i]);
  }

}
console.log(num);

// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
