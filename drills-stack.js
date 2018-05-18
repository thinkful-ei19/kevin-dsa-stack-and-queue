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

//===METHODS===\\

// PEEK

function peek(stack) {
  let currNode = stack.top;
  let displayNode = currNode.data.toString();

  if (currNode === null) {
    throw new Error('empty stack');
  }
  console.log(displayNode);
  return displayNode;
}

// DISPLAY

function display(stack) {
  let currNode = stack.top;
  let displayStack = currNode.data.toString();

  if (currNode === null) {
    throw new Error('empty stack');
  }

  while (currNode.next !== null) {
    displayStack += ', ' + currNode.next.data.toString();
    currNode = currNode.next;
  }

  console.log(displayStack);
  return displayStack;
}

// IS STRING A PALINDROME

function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  for (let i = 0; i < string.length; i++) {
    if (stack.pop() !== string[i]) {
      return false;
    } 
  }
  return true;
}

function matchingParens(string) {
  let temp = [];
  let tempBackward = [];
  for (let i = 0; i < string.length; i++) {
    current = string[i];
    lastChild = temp[temp.length-1];
    if (current === '(' || current === '[' || current === '{' ) {
      temp.push(current);
    }
    if (current === ')' || current === ']' || current === '}') {
      if (lastChild === '(' && current === ')') {
        temp.pop();
      }
      if (lastChild === '{' && current === '}') {
        temp.pop();
      }
      if (lastChild === '[' && current === ']') {
        temp.pop();
      }
    }
    // console.log(temp);
  }
  console.log(temp);
}

// ===STACK CREATION WITH MAIN=== \\

const starTrek = new Stack

function main() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
}

// ===INVOCATIONS===

main();
// peek(starTrek);
// display(starTrek);
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));
matchingParens('{[()]}');