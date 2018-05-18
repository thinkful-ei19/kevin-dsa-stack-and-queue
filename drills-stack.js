class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top 
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

//===METHODS===

function peek(stack) {
  let currNode = stack.top;
  let displayNode = currNode.data.toString();

  if (currNode === null) {
    throw new Error('empty stack');
  }

  return displayNode;
}

// ===STACK CREATION WITH MAIN===

function main() {
  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log(peek(starTrek));
  return starTrek;
}

// ===INVOCATIONS===

main();
