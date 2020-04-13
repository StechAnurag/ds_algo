// Google Interview Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

/* BRUTE - FORCE approach
function firstRecurringCharacter(input){
  for(let i = 0; i < input.length; i++){
     for(let j = i + 1; j < input.length; j++){
       if(input[i] === input[j]) return input[i];
     }
  }
  return undefined;
} 

  // Time Complexity - O(n^2)
  // Space Complexity - O(1)

console.log(firstRecurringCharacter([1, 2]));

*/

function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) return input[i];
    map[input[i]] = true;
    console.log(map);
  }
  //console.log(map);
  return undefined;
}
// Time complexity - O(n)
// Space complexity - O(n)

//firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);
//firstRecurringCharacter([2,5,1]);
