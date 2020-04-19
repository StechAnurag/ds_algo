// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

// BIG - O =  O(2^N) // Exponential time
function fibonacciRecursive(n) {
  // Base Case
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// fibonacciRecursive(4);

// fibonacciRecursive(20); Takes too long to calculate

// BIG - O = O(n) // Linear time
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

//fibonacciIterative(8);
