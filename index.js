class Node {
  constructor(value = null) {
    (this.value = value), (this.nextNode = null);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    if (this.head === null) {
      const node = new Node(value);
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      this.tail.nextNode = new Node(value);
      this.tail = this.tail.nextNode;
      this.size++;
    }
  }

  prepend(value) {
    if (this.head === null) {
      const node = new Node(value);
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      const node = new Node(value);
      node.nextNode = this.head;
      this.head = node;
      this.size++;
    }
  }

  at(index) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (index === count) {
        return currentNode;
      }

      count++;
      currentNode = currentNode.nextNode;
    }
    return -1;
  }

  pop() {
    if (this.head === null) {
      return;
    }
    this.size--;
    this.tail = this.at(this.size - 1);
    this.tail.nextNode = null;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (current.value === value) {
        return count;
      }
      current = current.nextNode;
      count++;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let string = "";
    let count = 0;

    if (current === null) {
      return (string = "null");
    }

    while (current) {
      if (count === 0) {
        string += `( ${current.value} )`;
      } else if (current.nextNode === null) {
        return (string += ` -> ( ${current.value} ) -> ${current.nextNode}`);
      } else {
        string += ` -> ( ${current.value} )`;
      }
      count++;
      current = current.nextNode;
    }
  }

  insertAt(value, index) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.size) {
      return this.append(value);
    }
    if (index > this.size) {
      return console.log(
        "Index exceeded the list size, please use append() method to add to the end of the list"
      );
    }

    const node = new Node(value);
    let current = this.head;
    let count = 0;

    while (current) {
      if (index === count + 1) {
        const splitNode = current.nextNode;
        current.nextNode = node;
        node.nextNode = splitNode;
        return;
      }
      current = current.nextNode;
      count++;
    }
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("hippo");
list.append("girafee");
list.prepend("elephant");
list.append("lion");
list.prepend("monkey");
list.append("gorilla");
list.insertAt("donkey", 9);

console.log(list.toString());
console.log(list.head);
console.log(list.tail);
