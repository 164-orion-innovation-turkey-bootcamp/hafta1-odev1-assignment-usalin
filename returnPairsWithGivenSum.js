/**
 * ONE METHOD TO MEASURE TIME ELAPSED FOR FUNCTION CALL / LOOP ITERATION
 * DOES NOT SEEM RELIABLE
 * const start = performance.now();
   FUNCTION CALL AFTERWARDS
   const duration = performance.now() - start;
 */

/**
 * @param arr - Takes in an array
 * @param target - a target (sum) value 
 * @returns array(s) of pairs
 */

//  SOLUTION 1
// function returnPairsThatTotalTarget(arr1, target) {
//     let holder = [];
//     if (arr1.length < 2) return "No pairs meet the requirement.";

//     for (let i = 0; i < arr1.length - 1; i++) {
//         for (let j = i + 1; j < arr1.length; j++) {
//             if ((arr1[i] + arr1[j] == target)) holder.push([i, j]);
//         }
//     }
//     return holder;
// }
//CASE 1, 2, 3 WORKS


/**
 * @param arr - Takes in an array
 * @param target - a target (sum) value 
 * @returns array(s) of pairs
 * Using Set does not help much in this case || Good to filter unique values - Simply here to experiment with sets.
 * 
 */
// SOLUTION 2.1 - Set

// function returnPairsThatTotalTarget(arr1, target) {
//     let set = new Set();
//     let keys = [];
//     let holder = [];

//     for (let value in arr1) set.add([value, arr1[value]]);
//     for (let item of set) keys.push(parseInt(item[1]));

//     if (keys.length < 2) return "No pairs meet the requirement.";

//     for (let i = 0; i < keys.length - 1; i++) {
//         for (let j = i + 1; j < keys.length; j++) {
//             if ((keys[i] + keys[j] == target)) holder.push([i, j]);
//         }
//     }
//     return holder;
// }
// CASE 1, 2, 3 WORKS


/**
 * @param arr - Takes in an array
 * @param target - a target (sum) value 
 * @returns array(s) of pairs
 * Simply here to experiment with maps.
 */
// SOLUTION 3 - Map

// function returnPairsThatTotalTarget(arr1, target) {
//     let map = new Map();
//     let holder = [];
//     for (let key in arr1) { map.set(key, arr1[key]); }

//     let values = Array.from(map).map(item => parseInt(item[1]));

//     if (values.length < 2) return "No pairs meet the requirement.";

//     for (let i = 0; i < values.length - 1; i++) {
//         for (let j = i + 1; j < values.length; j++) {
//             if ((values[i] + values[j] == target)) holder.push([i, j]);
//         }
//     }
//     return holder;
// }

//CASE 1, 2, 3 WORKS

// SOLUTION 4 - PURE MAP
/**
 * @param arr - Takes in an array
 * @param target - a target (sum) value 
 * @returns array(s) of pairs
 */

// function returnPairsThatTotalTarget(arr1, target) {
//     let holder = [];
//     let hashmap = new Map();

//     if (arr1.length < 2) return "No pairs meet the requirement.";
//     for (let i = 0; i < arr1.length ; i++) {
//         let complementaryValue = target - arr1[i];

//         if (hashmap.has(complementaryValue)) holder.push([hashmap.get(complementaryValue), i]);
//         hashmap.set(i, arr1[i]);
//     };
//     return holder;
// }

//Case 1, 2, 3 works
