// 10-->5-->14

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    /* const newNode = {
      value,
      next: null
    } */
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    /* const newNode = {
      value,
      next: null
    } */
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let currentNode = this.head;
    const array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // check index
    if (index >= this.length) {
      return this.append(value);
    }

    if (index <= 0) {
      return this.prepend(value);
    }

    // inserting in middle
    const newNode = new Node(value);
    const precedent = this.traverseToIndex(index - 1);
    const subsequent = precedent.next;
    /* 
      DEMONSTRATION:
      Precedent   Subsequent
          \         /
            NewNode
     */
    precedent.next = newNode;
    newNode.next = subsequent;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    // check for params : valid input
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // check index: > 0 && < this.length
    const precedent = this.traverseToIndex(index - 1);
    const unwantedNode = precedent.next;
    precedent.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(14);
myLinkedList.prepend(1);
myLinkedList.insert(200, 99);
myLinkedList.insert(0, 9);
myLinkedList.insert(3, 33);
myLinkedList.insert(3, 32);
myLinkedList.remove(5);
myLinkedList.remove(1);
//console.log(myLinkedList.printList());
