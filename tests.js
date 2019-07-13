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
