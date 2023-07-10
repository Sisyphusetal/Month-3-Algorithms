/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (de-duped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numbersA1 = [0, 1, 2, 2, 2, 7];
const numbersB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numbersA2 = [0, 1, 2, 2, 2, 7];
const numbersB2 = [2, 2];
const expected2 = [2];

const numbersA3 = [0, 1, 2, 2, 2, 7];
const numbersB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multi-sets (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is sorted and contains only the shared values
 *    between the two arrays de-duped.
 */
// function orderedIntersection(sortedA, sortedB) {
//     let commonArr = [];
//     // sortedA.forEach(element => {
//     //     if (!commonArr.includes(element)) {
//     //         commonArr.push(element);
//     //     }
//     // })
//     // return commonArr;
//     let indexA = 0;
//     let indexB = 0;
//     while(indexA<sortedA.length && indexB<sortedB.length){
//         if(sortedA[indexA] == sortedB[indexB]) {
//             commonArr.push(sortedA[indexA]);
//             if(sortedA[indexA] == sortedA[indexA+1]) {
//                 indexA++
//             }
//             if(sortedB[indexB] == sortedB[indexB+1]) {
//                 indexB++
//             }
//             indexB++;
//         }
        
        
//         indexA++;
//     }
    
//     return commonArr;
// }

function orderedIntersection(array1, array2) {
    commonValues = [];
    for (let i = 0; i < array1.length; ++ i){
        if (array2.indexOf(array1[i]) !== -1 && commonValues.indexOf(array1[i]) === -1) {
            commonValues.push(array1[i]);
        }
    }
    for (let j = 0; j < array2.length; ++ j) {
        if (array1.indexOf(array2[j]) !== -1 && commonValues.indexOf(array2[j]) === -1) {
            commonValues.push(array2[j]);
        }
    }
    return commonValues.sort((a, b) => a - b);
}

console.log(orderedIntersection(numbersA1, numbersB1));
console.log(orderedIntersection(numbersA2, numbersB2));
console.log(orderedIntersection(numbersA3, numbersB3));
