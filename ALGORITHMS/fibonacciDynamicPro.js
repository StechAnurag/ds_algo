// 0 , 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

let calculation = 0;
function fibonacci(n) {
  // Time complexity = O(2^N)
  //calculation++;
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
// fibonacci(15);
// console.log('It did '+calculation+ ' calculations.');

function fibonacciMaster() {
  // Time complexity = O(N)
  let cache = {};
  return function fib(n) {
    calculation++;
    if (n in cache) return cache[n];

    if (n < 2) {
      return n;
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

const fasterFib = fibonacciMaster();
console.log('Dynamic Programming--->', fasterFib(15));
console.log('It did ' + calculation + ' calculations.');

// Fibonacci Series using Dynamic Programming Bottom up method / Approach

function fibonacci2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

console.log(fibonacci2(15));
