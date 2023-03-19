//! Q.1 Write a javascript function that reverse a number.

// function reverse_a_number(n){
//     n = n + ""; // convert number to string (there are diff. ways to do this)
//     return n.split("").reverse().join(""); // split("") - method is used to split a string object into an array of strings by separating the string into substrings e.g = code: console.log('1000'.split("")); output: ["1", "0", "0", "0", "0"] reverse() -- method is used to reverse an array in place. join() -- method is used to join all elements of an array into a string
// }
// console.log(Number(reverse_a_number(456839)));

//! Q.5 Write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase.
// Ex- "the quick brown fox jumps over the lazy dog"

//? code starts here --
// function uppercase(str){
//     var array1 = str.split(' ');
//     var newarray1 = [];
//     for (var x = 0; x < array1.length; x++) {
//         newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//     }
//     return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox jumps over the lazy dog"));

// charAt() -- method is used to get the specified character from a string.
// toUpperCase() -- method is used to convert the string to uppercase
// slice() -- method returns a shallow copy of portion of an array into a new array object.
// push() -- method is used to add one or more elements to the end of an array and return the new length of the array.

//* after completing for loop  return the final string
// join() -- method joins all elements of an array to string

//! Q.6 Write the javascript function that accepts a string as a parameter and find the longest word within the string

//? code starts here --
// function find_longest_word(str) {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for (var x = 1; x < array1.length; x++) {
//     if (result.length < array1[x].length) {
//       result = array1[x];
//     }
//     return result;
//   }
// }
// console.log(find_longest_word("Web Development Tutorial"));


//! Q.7 Write a javascript function that accepts the string as a parameter and counts the number of vowels within the string.

//? code starts here --
// function vowel_count(str)
// {
//     var vowel_list = 'aeiouAEIOU';
//     var vowel_count = 0;
//     for (var x = 0; x < str.length; x++)
//     {
//         if (vowel_list.indexOf(str[x]) !== -1)
//         {
//             vowel_count += 1;
//         }
//     }
//     return vowel_count;
// }

// console.log(vowel_count('This function counts the vowels in the sentence. Yeah, Javascript is awesome'));

// ! Q. Compute the value of  where n is the exponent and b is the base of the bases. Accept b and n from the user and display the result.

//? code starts here --
function exp(b, n)
{
    var ans = 1;
    for (var i = 0; i <= n;)
    {
        ans = b * ans;
    }
    return ans;
}
console.log(exp(2, 3));