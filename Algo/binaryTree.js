class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      if (value < current.value && current.left) {
        this.left.insert(value);
      } else if (value < current.value) {
        this.left = node;
      } else if (value > current.value && current.right) {
        this.right.insert(value);
      } else {
        this.right = node;
      }
    }

  }
}

let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// console.log(tree);
