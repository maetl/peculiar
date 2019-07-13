import test from "ava";
import { Queue, PriorityQueue } from "./peculiar";

test("queue starts empty", t => {
  const queue = new Queue();
  t.is(queue.isEmpty(), true);
});

test("first in, first out", t => {
  const queue = new Queue();
  queue.add("first");
  queue.add("second");
  queue.add("third");

  t.is(queue.removeFirst(), "first");
  t.is(queue.removeFirst(), "second");
  t.is(queue.removeFirst(), "third");
});

test("priority queue starts empty", t => {
  const pqueue = new PriorityQueue();
  t.is(pqueue.isEmpty(), true);
});

test("priority in, priority out", t => {
  const pqueue = new PriorityQueue();
  pqueue.add("first", 3);
  pqueue.add("second", 1);
  pqueue.add("third", 2);

  t.is(pqueue.removeFirst(), "second");
  t.is(pqueue.removeFirst(), "third");
  t.is(pqueue.removeFirst(), "first");
});
