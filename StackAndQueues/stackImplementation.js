class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return null;

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    //const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    //return holdingPointer;
    return this;
  }

  peek() {
    return this.top;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('twitter');
myStack.push('udemy');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

// STACK IMPLEMENTATION using Array

/* class Stack{
  constructor(){
    this.data = [];
  }
  
  push(value){
    this.data.push(value);
    return this;
  }

  pop(){
    this.data.pop();
    return this;
  }

  peek(){
    if(this.data.length === 0) return null;
    return this.data[this.data.length - 1];
  }
}

const myStack = new Stack();
myStack.push('udemy');
myStack.push('discord');
//myStack.peek();
myStack.pop();
myStack.pop(); */
