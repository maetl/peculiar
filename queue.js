class Queue {
  constructor() {
    this._entries = [];
    this._offset = 0;
  }

  push(entry) {
    this._entries.push(entry);
  }

  isEmpty() {
    return (this._entries.length - this._offset) == 0;
  }

  peek() {
    if (this._entries.length == 0) return;

    return this._entries[this._offset];
  }

  pop() {
    if (this._entries.length == 0) return;

    const entry = this._entries[this._offset];

    this._offset++;

    // If the space left at the front takes up half of the array then
    // slice it off and reset the array offset
    if (this._offset * 2 > this._entries.length) {
      this._entries = this._entries.slice(this._offset);
      this._offset = 0;
    }

    return entry;
  }
}

export default Queue;
