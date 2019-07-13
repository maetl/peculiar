// Simple queue which uses an array as storage.
//
// Based on the original idea by Stephen Morley.
// See: http://code.stephenmorley.org/javascript/queues/
//
// @maetl / 2017
function Queue() {
  this._entries = [];
  this._offset = 0;
}

Queue.prototype.add = function(entry) {
  this._entries.push(entry);
}

Queue.prototype.isEmpty = function(){
  return (this._entries.length - this._offset) == 0;
}

Queue.prototype.removeFirst = function() {
  if (this._entries.length == 0) return;

  var entry = this._entries[this._offset];

  this._offset++;

  // If the space left at the front takes up half of the array then
  // slice it off and reset the array offset
  if (this._offset * 2 > this._entries.length) {
    this._entries = this._entries.slice(this._offset);
    this._offset = 0;
  }

  return entry;
}

// Simple priority queue using a binary heap array to store items.
// Uses the empty 0 index trick to simplify the arithmetic as described in
// Sedgewick's 'Algorithms' book.
//
// No JS-specific optimisations have been added to the code. Probably needs
// a profiling and refactoring tidyup.
//
// @maetl / 2017
function PriorityQueue() {
  this._heap = [];
  this._size = 0;
}

PriorityQueue.prototype.add = function(item, priority) {
  this._heap[++this._size] = [priority, item];
  this._bubbleUp(this._size);
}

PriorityQueue.prototype.isEmpty = function() {
  return this._size == 0;
}

PriorityQueue.prototype.removeFirst = function() {
  var first = this._heap[1][1];
  this._swap(1, this._size--);
  this._heap[this._size+1] = null;
  this._bubbleDown(1);
  return first;
}

PriorityQueue.prototype._bubbleUp = function(pos) {
  while (pos > 1 && this._comparison(Math.floor(pos / 2), pos)) {
    this._swap(Math.floor(pos / 2), pos);
    pos = Math.floor(pos / 2);
  }
}

PriorityQueue.prototype._bubbleDown = function(pos) {
  while (2 * pos <= this._size) {
    var next = 2 * pos;
    if (next < this._size && this._comparison(next, next +1)) next++;
    if (!this._comparison(pos, next)) break;
    this._swap(pos, next);
    pos = next;
  }
}

PriorityQueue.prototype._comparison = function(a, b) {
  return this._heap[a][0] > this._heap[b][0];
}

PriorityQueue.prototype._swap = function(a, b) {
  var item = this._heap[a];
  this._heap[a] = this._heap[b];
  this._heap[b] = item;
}

module.exports = {
  Queue,
  PriorityQueue
}
