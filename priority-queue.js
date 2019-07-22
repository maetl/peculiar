class PriorityQueue {
  constructor() {
    this._heap = [];
    this._size = 0;
  }

  push(element, priority) {
    this._heap[++this._size] = [element, priority];
    this.bubbleUp(this._size);
  }

  isEmpty() {
    return this._size == 0;
  }

  peek() {
    return this._heap[1][0];
  }

  pop() {
    return this.shift();
  }

  shift() {
    const [element, priority] = this.poll();
    return element;
  }

  poll() {
    const first = this._heap[1];
    this.swap(1, this._size--);
    this._heap[this._size+1] = null;
    this.bubbleDown(1);
    return first;
  }

  adjustBy(priority) {
    for (let i=1; i<=this._size; i++) {
      this._heap[i][1] += priority;
    }
  }

  [Symbol.iterator]() {
    const traversal = this._heap.slice(1);
    traversal.sort((a, b) => a[1] - b[1]);
    let index = 0;
    return {
      next: () => {
        const result = traversal[index++];
        if (result) {
          return {
            value: result[0],
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
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
    return this._heap[a][1] > this._heap[b][1];
  }

  swap(a, b) {
    const item = this._heap[a];
    this._heap[a] = this._heap[b];
    this._heap[b] = item;
  }
}

export default PriorityQueue;
