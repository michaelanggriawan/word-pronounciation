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

  insert(value, node = this.root) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      if (value < node.value && node.left) {
        this.insert(value, node.left);
      } else if (value < node.value) {
        node.left = newNode;
      } else if (value > node.value && node.right) {
        this.insert(value, node.right);
      } else {
        node.right = newNode;
      }
    }
  }

  find(value, node = this.root) {
    if (this.root === null) {
      return false;
    } else {
      if (value === node.value) {
        return true;
      } else if (value < node.value && node.left) {
        return this.find(value, node.left);
      } else if (value > node.value && node.right) {
        return this.find(value, node.right);
      }
    }
    return false;
  }

  BFS() {
    if (!this.root) {
      return [];
    } else {
      let queue = [this.root];
      let node = this.root;
      let data = [];

      while (queue.length) {
        node = queue.shift();
        data.push(node.value);

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }
    }
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      data.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
}

let BST = new BinarySearchTree();
BST.insert(31);
BST.insert(20);
BST.insert(10);
BST.insert(25);
BST.insert(9);
BST.insert(12);
BST.insert(24);
BST.insert(26);
BST.insert(58);
BST.insert(45);
BST.insert(44);
BST.insert(77);
BST.insert(88);
BST.insert(92);
