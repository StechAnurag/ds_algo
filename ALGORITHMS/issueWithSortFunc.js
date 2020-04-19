const characters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const numbers = [1, 67, 55, 3, 7, 9, 44];

// sort() works well with string by default;

characters.sort();

numbers.sort(); // does not work as expected

numbers.sort((a, b) => a - b); // now it sorts numbers

// with spanish characters
const spanish = ['álgebra', 'Fútbol', 'cosas', 'España'];
spanish.sort(); // does not work as expected

spanish.sort((a, b) => a.localeCompare(b)); // now works
