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
    this.size = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    
    if (this.size == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    
    const holdingPointer = this.top;
    this.top = holdingPointer.next;
    this.size--;
    return this;
  }

}


const myStack = new Stack();
myStack.peek();
myStack.push(2);
myStack.push(5);
myStack.push(6);
myStack.peek();

myStack.pop();