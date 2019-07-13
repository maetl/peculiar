class PriorityQueue {
  constructor() {
    this._heap = [];
    this._size = 0;
  }

  add(item, priority) {
    this._heap[++this._size] = [priority, item];
    this.bubbleUp(this._size);
  }

  isEmpty() {
    return this._size == 0;
  }

  removeFirst() {
    const first = this._heap[1][1];
    this.swap(1, this._size--);
    this._heap[this._size+1] = null;
    this.bubbleDown(1);
    return first;
  }

  bubbleUp(pos) {
    while (pos > 1 && this.compare(Math.floor(pos / 2), pos)) {
      this.swap(Math.floor(pos / 2), pos);
      pos = Math.floor(pos / 2);
    }
  }

  bubbleDown(pos) {
    let next;
    while (2 * pos <= this._size) {
      next = 2 * pos;
      if (next < this._size && this.compare(next, next +1)) next++;
      if (!this.compare(pos, next)) break;
      this.swap(pos, next);
      pos = next;
    }
  }

  compare(a, b) {
    return this._heap[a][0] > this._heap[b][0];
  }

  swap(a, b) {
    const item = this._heap[a];
    this._heap[a] = this._heap[b];
    this._heap[b] = item;
  }
}

export default PriorityQueue;
