/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const newNode = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const removedHead = this.head.value;
    this.head = this.head.next;
    return removedHead;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let found = false; // guilty until proven true
    let checkedNode = this.head;
    while (checkedNode) {
      if (checkedNode.value === value) {
        found = true;
      }
      checkedNode = checkedNode.next;
      // need checkedNode because we don't wanna change this.head
      // the next next becomes the head
      // Allows to continue checking the list
    } return found;
  }
}
module.exports = LinkedList;
