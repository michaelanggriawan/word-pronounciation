class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    ++this.length;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let pop = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = pop.prev;
      this.tail.next = null;
      pop.prev = null;
    }
    --this.length;

    return pop;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let node = this.head;
    this.head = node.next;
    node.prev = null;
  }

  traverse() {
    let node = this.head;
    while (node.next) {
      console.log(node.val);
      node = node.next;
    }
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    ++this.length;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let mid = Math.floor(this.length / 2);

    if (index > mid) {
      let node = this.tail;
      let counter = this.length - 1;
      while (counter > index) {
        node = node.prev;
        --counter;
      }
      return node;
    } else {
      let node = this.head;
      let counter = 0;
      while (counter < index) {
        node = node.next;
        ++counter;
      }
      return node;
    }
  }

  set(val, index) {
    let node = this.get(index);
    if (typeof node !== 'undefined') {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    ++this.length;
    return true;
  }

  traverse() {
    let node = this.tail;
    while (node) {
      console.log(node.prev);
      node = node.prev;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    let beforeNode = this.get(index - 1);
    let afterNode = this.get(index + 1);
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    --this.length;
    return this;
  }
}