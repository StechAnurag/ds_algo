function addTo80(n) {
  console.log('long time');
  return n + 80;
}

// addTo80(5);
// addTo80(5);
// addTo80(5);

let cache = {};

function memoizedAddTo80(n) {
  if (n in cache) return cache[n];
  console.log('long time');
  cache[n] = n + 80;
  return cache[n];
}

// console.log('1',memoizedAddTo80(5));
// console.log('2',memoizedAddTo80(5));
// console.log('3',memoizedAddTo80(5));

// Better solution of memoization

// Forming a closure : to avoid global cache variable

function memoizedAdd80() {
  let cache = {};
  return function (n) {
    if (n in cache) return cache[n];
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];
  };
}

const memoized = memoizedAdd80();

console.log('1', memoized(5));
console.log('2', memoized(5));
console.log('3', memoized(5));
