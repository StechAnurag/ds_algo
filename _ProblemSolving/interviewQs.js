// Q:1-  Find the occurance of characters

const aString = 'mnopqmonpqrmono';

const occurance = {};

aString
  .split('')
  .forEach((char) => (occurance[char] ? (occurance[char] += 1) : (occurance[char] = 1)));

//console.log(occurance);

/* Q:2-

const input = [1, [2, 3], [4], [5, 6], [6, [7]]];
const output = input.flat(2);

// for other ways check MDN docs Array.prototype.flat()
console.log(output);
*/

// Q:3- Compare two Objects

const a = {
  m: 1,
  n: 0,
  q: 3,
  r: 4,
};

const c = {
  m: 1,
  n: 0,
  q: 3,
  r: 4,
};

const b = {
  g: 1,
  m: 1,
  n: 0,
  r: 5,
  q: 3,
};

// Solution : 1
if (JSON.stringify(a) !== JSON.stringify(c)) {
  console.log('Objects are not equal');
} else {
  console.log('Objects are equal');
}

// Solution : 2
// using lodash  _.isEqual(obj1, obj2)

// Solution : 3
if (JSON.stringify(Object.entries(a)) === JSON.stringify(Object.entries(b))) {
  console.log('Fir se equal');
} else {
  console.log('Nahi hai equal');
}
