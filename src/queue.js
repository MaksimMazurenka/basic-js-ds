const { NotImplementedError } = require('../extensions/index.js');

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
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
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return value;
  }

  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue
};
