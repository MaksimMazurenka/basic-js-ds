const { NotImplementedError } = require('../extensions/index.js');

class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const removedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return removedValue;
  }

  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue
};
