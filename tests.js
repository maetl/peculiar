import test from "ava";
import { Queue, PriorityQueue } from "./peculiar";

test("queue starts empty", t => {
  const queue = new Queue();
  t.is(queue.isEmpty(), true);
});

test("first in, first out", t => {
  const queue = new Queue();
  queue.push("first");
  queue.push("second");
  queue.push("third");

  t.is(queue.peek(), "first");

  t.is(queue.pop(), "first");
  t.is(queue.pop(), "second");
  t.is(queue.pop(), "third");
});

test("queue is iterable", t => {
  const queue = new Queue();
  queue.push("first");
  queue.push("second");
  queue.push("third");

  const result = [...queue];

  t.is(result.length, 3);
  t.is(result[0], "first");
  t.is(result[1], "second");
  t.is(result[2], "third");
});

test("priority queue starts empty", t => {
  const pqueue = new PriorityQueue();
  t.is(pqueue.isEmpty(), true);
});


test("priority in, priority out", t => {
  const pqueue = new PriorityQueue();
  pqueue.push("first", 3);
  pqueue.push("second", 1);
  pqueue.push("third", 2);

  t.is(pqueue.peek(), "second");

  t.is(pqueue.pop(), "second");
  t.is(pqueue.pop(), "third");
  t.is(pqueue.pop(), "first");
});

test("priority queue is iterable", t => {
  const pqueue = new PriorityQueue();
  pqueue.push("c", 30);
  pqueue.push("a", 10);
  pqueue.push("e", 50);
  pqueue.push("d", 40);
  pqueue.push("b", 20);

  const result = [...pqueue];

  t.is(result.length, 5);
  t.is(result[0], "a");
  t.is(result[1], "b");
  t.is(result[2], "c");
  t.is(result[3], "d");
  t.is(result[4], "e");
});
