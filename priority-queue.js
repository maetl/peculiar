/**
 * An ordered collection data structure where elements with higher priority are
 * returned before elements with lower priority.
 *
 * ```js
 * const pqueue = new PriorityQueue();
 *
 * pqueue.push("%%%", 3)
 * pqueue.push("!!!", 1)
 * pqueue.push("&&&", 2)
 *
 * pqueue.peek() // => "!!!"
 *
 * pqueue.poll() // => "!!!"
 * pqueue.poll() // => "&&&"
 * pqueue.poll() // => "%%%"
 * ```
 */
class PriorityQueue {
  constructor(compareMax=false) {
    this._heap = [];
    this._size = 0;
    this.compare = compareMax ? this.compareMax : this.compareMin;
  }

  /**
   * Adds a new element to the queue.
   *
   * @param  {mixed} element  Element to be stored in the queue
   * @param  {number} priority Priority assigned to the element
   */
  push(element, priority) {
    this._heap[++this._size] = [element, priority];
    this.bubbleUp(this._size);
  }

  get length() {
    return this._size;
  }

  isEmpty() {
    return this._size == 0;
  }

  peek() {
    return this._heap[1][0];
  }

  poll() {
    const [element] = this.pollIndex();
    return element;
  }

  pollIndex() {
    const index = this._heap[1];
    this.swap(1, this._size--);
    this._heap[this._size+1] = null;
    this.bubbleDown(1);
    return index;
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

  compareMin(a, b) {
    return this._heap[a][1] > this._heap[b][1];
  }

  compareMax(a, b) {
    return this._heap[b][1] > this._heap[a][1];
  }

  swap(a, b) {
    const item = this._heap[a];
    this._heap[a] = this._heap[b];
    this._heap[b] = item;
  }

  clear() {
    this._heap = [];
    this._size = 0;
  }
}

PriorityQueue.MAX = true;
PriorityQueue.MIN = false;

export default PriorityQueue;
