class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.length;
    return this;
  }

  traverse() {
    let node = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;
    --this.length;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let prevNode = this.head;
      this.head = newNode;
      this.head.next = prevNode;
    }
    this.length++;

    return this;
  }

  get(index) {
    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter === index) {
        break;
      }

      current = current.next;
      ++counter;
    }

    if (counter > index) {
      return null;
    }

    return current;
  }

  set(index, val) {
    let found = this.get(index);
    if (!found) return false;
    found.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return prev;
  }

  reverse() {
    
    // let current = this.head;
    // let prev = null;
    // let next = null;
 
    // for (let i = 0; i < this.length; i++) {
    //   next = current.next;
    //   current.next = prev;
    //   prev = current;
    //   current = next;
    // }

    // this.head = this.tail;
    // this.tail = current;
 
    // return this;

    let current = this.head;
    let len = this.length;
    for(let i = 0; i < len; ++i) {
      this.unshift(current.val);
      current = current.next;
    }

    let reverseNode = this.head;
    for (let i = 0; i < len - 1; ++i) {
      reverseNode = reverseNode.next;
    }

    reverseNode.next = null;

    return this;
  }
 
}

let list = new SingleLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

list.reverse();
list.traverse();

// list.push('HELLOO');
// list.push('GOODBYE');
// list.push('!');

// list.traverse();
// console.log(list);
// list.pop();
// list.pop();
// list.pop();
// console.log(list);

// list.unshift('HAHAHA');
// list.traverse();
// console.log(list);
// console.log('get', list.get(2));
// console.log('get', list.get(5));
// list.set(2, 'Updated');
// list.insert(3, 'coba coba...');
// list.traverse();
