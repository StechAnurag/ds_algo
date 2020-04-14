/*
const characters = ['a', 'b', 'c', 'd'];

// access / lookup
characters[2] // O(1)

// Push - operation  
characters.push('e'); // O(1)

// Pop - operation  
characters.pop(); // O(1)

// unshift
characters.unshift('x'); // O(n)

// splice - Insert at a location
characters.splice(2, 0, 'alien'); // O(n) operation

console.log(characters);

*/

/* ------Building an Array in JS----- */

// CONCEPT: Arrays are objects with integer as keys that act like indexes

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('There!');
newArray.push('Global');
newArray.push('Corona');
//newArray.pop();
//newArray.delete(1);
newArray.push('Novel');
newArray.push('Pandemic');
newArray.delete(4);
console.log(newArray);
