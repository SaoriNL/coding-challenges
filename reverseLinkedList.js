var reverseList = function(head) {
  let current = head;
  let previous = null;

  while(current !== null){
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
  }
  return previous;
}
