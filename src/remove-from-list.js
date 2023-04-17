const { NotImplementedError } = require('../extensions/index.js');

function removeKFromList(l, k) {
  if (!l) return null;

  const dummy = new ListNode(-1);
  dummy.next = l;

  let prev = dummy;
  let curr = l;

  while (curr) {
    if (curr.value === k) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummy.next;
}

module.exports = {
  removeKFromList
};

