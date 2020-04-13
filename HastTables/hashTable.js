/*
const user = {
  age: 28,
  name: 'Kiara',
  magic: true,
  scream : function(){
    console.log('Ahhhh!');
  }
}

// Lookup
user.age; // O(1)

// Insert 
user.spell = 'Abra kadabra'; // O(1)

// Lookup can be - O(n) due to Hash Collison

user;

// Can store any dataType as a key; maintains an order
const a = new Map();

// Only Stores keys
const b = new Set();

*/

/* -----Implementing a Hash Table------- */

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } // O(1) mostly, O(n) when limited spaces

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        //this.data[i].forEach(el => keysArray.push(el[0]));
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

//const newHashTable = new HashTable(2);
const newHashTable = new HashTable(50);
newHashTable.set('grapes', 1000);
newHashTable.set('apples', 100);
newHashTable.set('oranges', 30);
newHashTable.get('apples');

newHashTable.keys();
