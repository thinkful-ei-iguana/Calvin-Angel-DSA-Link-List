/* eslint-disable quotes */
/* eslint-disable no-console */

const LinkedList = require("./app");
let SLL = new LinkedList();
const CycleList = new LinkedList();

function main() {
  CycleList.insertLast("A");
  CycleList.insertLast("B");
  CycleList.insertLast("C");
  CycleList.insertBefore("D", "A");
  CycleList.insertFirst("E");
  CycleList.insertFirst("F");
  CycleList.insertFirst("G");
  CycleList.insertFirst("H");
  CycleList.insertFirst("I");
  CycleList.find("B").next = CycleList.find("A");

  SLL.insertFirst("Apollo");
  SLL.insertFirst("Boomer");
  SLL.insertFirst("Helo");
  SLL.insertFirst("Husker");
  SLL.insertFirst("Starbuck");

  SLL.insertLast("Tauhida");

  SLL.insertAfter("Hotdog", "Helo");
  // SLL.insertAt('Kat', 3)

  console.log(SLL);
  debugger;
  return SLL;
}

main();
//Drill 3
function display(SLL) {
  let res = [];
  let current = SLL.head;
  while (current !== null) {
    res = [...res, current.value];
    current = current.next;
  }
  return res;
}
function ListSize(list) {
  let count = 0;
  let current = SLL.head;
  while (current != null) {
    count++;
    current = current.next;
  }
  return count;
}
function isEmpty(list) {
  if (list.head === null) {
    return true;
  }
  return false;
}

function findPrev(list, item) {
  let current = list.head;
  let prev = list.head;

  while (current !== null) {
    if (current.value === item) {
      return prev.value;
    }
    prev = current;
    current = current.next;
  }
}
//Drill 4
function findLast(list) {
  let current = list.head;

  while (current !== null) {
    if (current.next === null) {
      return current;
    }
    current = current.next;
  }
}
//Drill 5
function reverseList(list) {
  const newList = new LinkedList();
  if (list.head === null) {
    return null;
  } else {
    let currNode = list.head;
    while (currNode !== null) {
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
  while (current.next !== null) {
    res = prev;
    prev = current;
    current = current.next;
  }
  return res.value;
}
//Drill 7
function middleList(list) {
  const middleList = reverseList(list);
  let midCurr = list.head;
  let midmidCurr = middleList.head;
  while (midCurr !== null) {
    if (midCurr.value === midmidCurr.value) {
      return midmidCurr.value;
    }
    midCurr = midCur.next;
    midmidCurr = midmidCurr.next;
  }
  return "Cant Find Middle of List";
}
function cycleList(list) {
  const storeList = new LinkedList();
  let current = list.head;
  while (current !== null) {
    storeList.insertLast(current.value);
    let storeCurr = storeList.head;
    while (storeCurr !== null) {
      if (current.next.value === storeCurr.value) {
        return true;
      }
      storeCurr = storeCurr.next;
    }
    current = current.next;
  }
  return false;
}
console.log(cycleList(CycleList));
console.log(CycleList);
//console.log(ListSize(SLL));
//console.log(isEmpty(SLL));
//console.log(findPrev(SLL, 'Apollo'));
//console.log(findLast(SLL));
//reverseList(SLL);
//console.log(thrdFromEnd(SLL));
//console.log(dumbFindMid(SLL));

/*
REMOVES ANY DUPLICATES IN AN ARRAYLIST
TIME COMPLEXITY OF O(n^2)
function WhatDoesThisProgramDo(lst) {
    let current = lst.head; 1
    while (current !== null) n {
        let newNode = current; 1 
        while (newNode.next !== null) n {
            if (newNode.next.value === current.value) { 1
                newNode.next = newNode.next.next; 1
            }
            else {
                newNode = newNode.next; 1
            }
        }
        current = current.next;
    }
}
*/
