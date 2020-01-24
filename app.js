const _Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertAfter(item, node) {
    let currNode = this.head;
    let nextNode = this.head;

    if(this.head === null) {
      this.insertFirst(item)
    }
    while(currNode.value !== node) {
      currNode = currNode.next;
      nextNode = currNode.next;
      
      if(currNode.next === null) {
        console.log('Node not Found')
        return;
      }
    }
    currNode.next = new _Node(item, nextNode);
  }
  insertAt(item, num) {
    let prevNode = this.head;
    let currNode = this.head;
    let nextNode = this.head;

    while (num > 0) {
      num--;
      prevNode = currNode.next;
      nextNode = currNode.next;

      if(currNode.next === null && num > 0) {
        console.log('not enough nodes');
        return;
      }
    }
    prevNode.next = new _Node(item, nextNode)
  }
  insertBefore(item, node) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    if (this.head.value === node) {
      this.insertFirst(item);
    }
    let after = node;
    let tempNode = this.head;
    while (tempNode.next.value !== after) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, after);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
}

module.exports = LinkedList;
