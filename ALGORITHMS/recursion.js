/*************************************
 * NOTE: Do have a return statement  *
 * for both the cases: recursive &   *
 * base case. If we dont have, We    *
 * cant get the returned value from  *
 * function.                         *
 **************************************/

let counter = 0;

function inception() {
  //console.log(counter);
  if (counter > 3) return 'done';
  counter++;
  return inception();
}

inception();

// RULES for Recursion

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Usually have two returns for both the cases;
