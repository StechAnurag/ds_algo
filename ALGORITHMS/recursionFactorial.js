// Write two functions that finds the factorial of any number. One Recursive, Another using For loop

// BIG - O = O (n - 1) = O(n)
function factorialRecursive(number) {
  if (number === 2) return 2; // Base Case

  return number * factorialRecursive(number - 1); // Recursive Case
}

factorialRecursive(5);

// BIG - O = O (n - 1) = O(n)
function factorialIterative(number) {
  let factorial = 1;
  for (let i = number; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
}

//factorialIterative(6);
