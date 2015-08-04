// Linked List implementation

var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

var Node = function(value) {
  this.value = value;
  this.next = null;
};

LinkedList.prototype.appendToTail = function(value) {
  // create new Node
  var node = new Node(value);

  // if linked list is empty then set head and tail to new node
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeFromHead = function() {
  // if the linked list is empty then return null
  if (this.head === null) {
    return null;
  }

  // save the head node in order to return it
  var node = this.head;

  // move the head reference to the next node in the linked list
  this.head = this.head.next;

  // if the head is now null then the linked list is empty
  // update the tail reference to also be null
  if (this.head === null) {
    this.tail = null;
  }

  // return the old head node
  return node;
};

LinkedList.prototype.removeNode = function(target) {
  // if linked list is empty then return false
  if (this.head === null) {
    return false;
  }
  
  // check if head contains target value
  if (this.head.value === target) {
    this.removeFromHead();
    return true;
  }

  // iterate through the linked list until the target is found or we reach the end of the linked list
  var iterator = this.head;

  while (iterator.next !== null) {
    if (iterator.next.value === target) {
      // update the tail reference if we remove the last node
      if (iterator.next.next === null) {
        this.tail = iterator;
      }
      iterator.next = iterator.next.next;
      return true;
    } else {
      iterator = iterator.next;
    }
  }

  // target value was not found in the linked list
  return false;
};
