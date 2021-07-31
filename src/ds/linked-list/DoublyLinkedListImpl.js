class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedListImpl {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = this.head;
  }


  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    }
    if (this.tail == null) {
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.size++;
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
  if (index < 0 || index >= this.size) {
    return this.append(value);
  }

  if (index === 0) {
    this.prepend(value);
    return this.printList();
  }

  const newNode = new Node(value);

  let leader = this.traverseToIndex(index - 1);
  let follower = leader.next;
  leader.next = newNode;
  newNode.prev = leader;
  newNode.next = follower;
  follower.prev = newNode;
  this.size++;
  return this.printList();
}

traverseToIndex(index) {
  let currentNode = this.head;
  let counter = 0;
  while (counter < index) {
    currentNode = currentNode.next;
    counter++;
  }
  return currentNode;
}

remove(index) {
  if (index < 0 || index >= this.size) {
    this.tail = null;
    return this.printList();
  }

  let leader = this.traverseToIndex(index - 1);
  let unwantedNode = leader.next;
  let follower = unwantedNode.next;
  follower.prev = leader;
  leader.next = follower;
  this.size--;
  return this.printList();
}

}

let myLinkedList = new DoublyLinkedListImpl();
myLinkedList.append(6);
myLinkedList.prepend(3);
myLinkedList.append(5);
myLinkedList.prepend(8);
myLinkedList.insert(2, 99);
myLinkedList.insert(22, 35);
console.log(myLinkedList.printList());
myLinkedList.remove(3);
console.log(myLinkedList.printList());