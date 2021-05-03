// Need to import the Node class so the LinkedList class can instantiate nodes in a linked list.

import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode;
    }
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      let currentIndex = 0;
      while ((currentIndex +1 ) <= index) {
        if (currentNode.next === null ) {
          return -1;
        }
        if ((currentIndex + 1) === index) {
          currentNode.next = currentNode.next.next;
          break;
        }
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  }

}