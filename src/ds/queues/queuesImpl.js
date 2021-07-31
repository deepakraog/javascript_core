class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek() {
    return this.top;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    console.log(this);
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    console.log(this);
    return this;
  }
}

const myQueues = new Queues();
myQueues.peek();
myQueues.enqueue('london');
myQueues.enqueue('nyc');
myQueues.enqueue('denmark');
myQueues.enqueue('russia');

myQueues.peek();
myQueues.dequeue();