/* eslint-disable quotes */
/* eslint-disable no-console */

//Drill 2
const LinkedList = require("./app");
let SLL = new LinkedList();

function main() {
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  
  SLL.insertLast('Tauhida')

  SLL.insertAfter('Hotdog', 'Helo')
  // SLL.insertAt('Kat', 3)

  console.log(SLL);
  debugger
  return SLL;
}

main();
//Drill 3
function display(SLL) {
  let res=[];
  let current = SLL.head;
  while(current !== null){
    res = [...res, current.value];
    current = current.next;
  }
  return res; 
}
function ListSize(list) {
  let count = 0;
  let current = SLL.head;
  while(current != null) {
    count++;
    current = current.next;
  }
  return count;
}
function isEmpty(list) {
  if(list.head === null) {
    return true;
  }
  return false;
}

function findPrev(list, item) {
  let current= list.head;
  let prev = list.head;

  while(current !== null) {
    if(current.value === item) {
      return prev.value;
    }
    prev = current;
    current = current.next;
  }
}
//Drill 4
function findLast(list) {
  let current = list.head;

  while(current !== null) {
    if(current.next === null){
      return current;
    }
    current = current.next;
  }
}
//Drill 5
function reverseList(list) {
  const newList = new LinkedList;
  if(list.head === null) {
    return null;
  } else {
    let currNode = list.head;
    while(currNode !== null) {
      newList.insertFirst(currNode.value);
      currNode = currNode.next;
    }
  }
  console.log(display(newList));
  return newList;
}
//Drill 6
function thirdFromEnd(list) {
  let current = list.head;
  let prev = list.head;
  let res = list.head;
  while(current.next !== null) {
    res = prev;
    prev = current;
    current = current.next;
  }
  return res.value;
}
//Drill 7
function middleList (list) {
  const middleList = reverseList(list);
  let midCurr = list.head;
  let midmidCurr = middleList.head;
  while(midCurr !== null) {
    if (midCurr.value === midmidCurr.value) {
      return midmidCurr.value
    }
    midCurr = midCur.next
    midmidCurr = midmidCurr.next;
  }
  return 'Cant Find Middle of List'
}