class StackUsingArray {
  constructor() {
    this.stackArray = [];
  
  }

  peek() {
    return this.stackArray[this.stackArray.length - 1];
  }

  push(value) {
    this.stackArray.push(value);
    console.log(this);
    return this;
  }

  pop() {
    this.stackArray.pop();
    console.log(this);
    return this;
  }

}


const myStack = new StackUsingArray();
console.log(myStack.peek());
myStack.push(2);
myStack.push(5);
myStack.push(6);
console.log(myStack.peek());

myStack.pop();