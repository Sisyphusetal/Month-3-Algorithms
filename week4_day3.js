/* 
    Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
    // set variable for longest substring, count starting at 1, empty value array for checking
    let longest = 0, count = 1, values = [];
    // iterate through string, stopping if remaining values is less than longest substring
    for ( let i = 0; i < str.length - longest; i++){
        // push initial value into array for checking
        values.push(str[i])
        // iterate through remaining values in string
        for ( let j = i+1; j < str.length; j++){
            // if next value is already in values array, break loop
            if ( values.includes(str[j]) ){
                break;
            // else add value to values array and increase count
            } else {
                values.push(str[j]);
                count++;
            }
        }
        // update longest substring count if current count is greater than previous longest count
        if ( count > longest ) longest = count
        // reset tracking values
        count = 1
        values = []
    }
    // return longest substring count
    return longest
}

console.log(lengthOfLongestSubString(str1));
console.log(lengthOfLongestSubString(str2));
console.log(lengthOfLongestSubString(str3));
console.log(lengthOfLongestSubString(str4));
