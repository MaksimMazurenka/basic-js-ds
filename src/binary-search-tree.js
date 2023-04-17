const { NotImplementedError } = require('../extensions/index.js');
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
    } else {
      this._addNode(this._root, newNode);
    }
  }

  _addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._addNode(node.left, newNode);
      }
    } else if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._hasNode(this._root, data);
  }

  _hasNode(node, data) {
    if (node === null) {
      return false;
    }
    if (data === node.data) {
      return true;
    }
    if (data < node.data) {
      return this._hasNode(node.left, data);
    } else {
      return this._hasNode(node.right, data);
    }
  }

  find(data) {
    return this._findNode(this._root, data);
  }

  _findNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      return node;
    }
    if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minValue = this._minValue(node.right);
        node.data = minValue;
        node.right = this._removeNode(node.right, minValue);
        return node;
      }
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  }

  _minValue(node) {
    let minValue = node.data;
    while (node.left !== null) {
      minValue = node.left.data;
      node = node.left;
    }
    return minValue;
  }

  min() {
    if (this._root === null) {
      return null;
    }
    return this._minValue(this._root);
  }

  _maxValue(node) {
    let maxValue = node.data;
    while (node.right !== null) {
      maxValue = node.right.data;
      node = node.right;
    }
    return maxValue;
  }

  max() {
    if (this._root === null) {
      return null;
    }
    return this._maxValue(this._root);
  }
}

module.exports = {
  BinarySearchTree
};