import assert from "assert";
import { Queue, PriorityQueue } from "./metis";

describe("Queue", function() {
  it("starts empty", function() {
    var queue = new Queue();

    assert.equal(queue.isEmpty(), true);
  });

  it("first in, first out", function() {
    var queue = new Queue();
    queue.add("first");
    queue.add("second");
    queue.add("third");

    assert.equal(queue.removeFirst(), "first");
    assert.equal(queue.removeFirst(), "second");
    assert.equal(queue.removeFirst(), "third");
  });
});

describe("PriorityQueue", function() {
  it("starts empty", function() {
    var queue = new PriorityQueue();

    assert.equal(queue.isEmpty(), true);
  });

  it("priority in, priority out", function() {
    var queue = new PriorityQueue();
    queue.add("first", 3);
    queue.add("second", 1);
    queue.add("third", 2);

    assert.equal(queue.removeFirst(), "second");
    assert.equal(queue.removeFirst(), "third");
    assert.equal(queue.removeFirst(), "first");
  });
});
