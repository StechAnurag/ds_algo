// Q. Create a function that reverses a string;

//e.g., Novel = Levon;

function reverseString(str) {
  // check input if its string
  if (!str || typeof str !== 'string') {
    return 'Invalid Input';
  }

  const strArr = str.split('');
  const reversedArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedArr.push(strArr[i]);
    // also can be done as below without split
    //reversedArr.push(str[i]);
  }
  return reversedArr.join('');
}

reverseString('Novel');

// Another way : One Liner

const reverseString2 = (str) => str.split('').reverse().join('');

reverseString2('My Name is Lakhan');
