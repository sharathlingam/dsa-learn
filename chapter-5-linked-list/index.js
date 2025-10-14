function Node(value) {
  this.value = value;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.size || index < 0) return -1;

  let nodeAtIdx = this.head;
  for (let i = 0; i < index; i++) {
    nodeAtIdx = nodeAtIdx?.next;
  }
  return nodeAtIdx?.value;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  node.next = this.head;
  this.head = node;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);

  if (!this.head) {
    this.head = node;
  } else {
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    last.next = node;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size || index < 0) {
    return;
  }
  if (index == 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  let node = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  node.next = curr.next; //(2).next = 1.next(3)
  curr.next = node; //(1).next = (2)
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) {
    return;
  }

  if (index == 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }

  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 */

var obj = new MyLinkedList();
console.log(obj);
var param_1 = obj.get(0);
console.log(param_1);
obj.addAtHead(1);
console.log(obj);
obj.addAtTail(3);
console.log(obj);
obj.addAtIndex(1, 2);
console.log(obj);
obj.deleteAtIndex(1);
console.log(obj);
