class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }


  add(element) {
    let node = new Node(element);
    let current = this.head;
    if (this.head === null) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index >= this.size) {
      console.log('invalid index');
      return;
    } else {
      let node = new Node(element);
      let current;
      let previous;
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let it = 0;
        while (it < index) {
          previous = current;
          current = current.next;
          it++;
        }
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  }

removeFrom(index) {
  if (index < 0 || index >= this.size) {
    console.log('invalid index');
    return;
  } else {
    let current = this.head;
    let prev;
    let it = 0;

    if (index == 0) {
      this.head = current.next;
    } else {
      while (it < index) {
        prev = current;
        current = current.next;
        it++;
      }
  
      prev.next = current.next;
    }
    this.size--;
    return current.element;
  }
}

removeElement(element) {
  let previous;
  let current = this.head;

  while (current !== null) {
    if (current.element === element) {
      if (previous == null) {
        this.head = current.next;
      } else {
        previous.next = current.next;
      }
      this.size--;
      return current.element;
    }
    previous = current;
    current = current.next;
  }
  return -1;
}

  printList() {
    let current = this.head;
    let str = "";
    while(current) {
      str += current.element + ', ';
      current = current.next;
    }
    str = str.replace(/,\s*$/, "");
    console.log(str);
  }


  isEmpty() {
    return this.size === 0;
  }

  size_of_list() {
    return this.size;
  }
}

// Caller

let ll = new LinkedList();
console.log('size of list '+ll.size_of_list());
console.log('List Empty Check '+ll.isEmpty());
ll.add(4);
ll.add(5);
ll.add(6);
ll.add(3);

ll.insertAt(33, 2);

ll.add(4);
ll.add(8);
ll.add(10);
ll.removeElement(3);
ll.printList();
ll.add(9);
ll.printList();
ll.removeFrom(7);

console.log('removed element '+ll.removeFrom(6));

console.log('size of list '+ll.size_of_list());
console.log('List Empty Check '+ll.isEmpty());
ll.printList();