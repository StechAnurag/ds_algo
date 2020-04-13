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
    // validate value later
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    // validate value later
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }

    // validate value later
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next || this.length === 1) {
      return this.head;
    }
    let first = this.head;
    this.tail = first;
    let second = first.next;
    let counter = 0;
    while (second) {
      // i.e., second !null
      const temp = second.next; // 3rd item, 16 --> 88
      second.next = first; // [1->10->16->88], now 1 <- 10 rather than 10 -> 16
      first = second; // first = 10 -> 1 now
      second = temp; // second = 3rd item i.e, 16 -> 88
    }
    this.head.next = null; // 1 -> null
    this.head = first;
    return this;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.append(88);
myLinkedList.prepend(1);
//myLinkedList.printList()
//myLinkedList.insert(2, 99)
//myLinkedList.insert(20, 88)
//myLinkedList.printList()
//myLinkedList.remove(2)

console.log('Initially -');
myLinkedList.printList();

myLinkedList.reverse();

console.log('Finally -');
myLinkedList.printList();
