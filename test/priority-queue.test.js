import test from "ava";
import { PriorityQueue } from "../src/peculiar.js";

test("priority queue starts empty", t => {
  const pqueue = new PriorityQueue();
  t.is(pqueue.isEmpty(), true);
});


test("min priority queue", t => {
  const pqueue = new PriorityQueue();
  pqueue.push("first", 3);
  pqueue.push("second", 1);
  pqueue.push("third", 2);

  t.is(pqueue.peek(), "second");
  t.is(pqueue.length, 3);

  t.is(pqueue.poll(), "second");
  t.is(pqueue.poll(), "third");
  t.is(pqueue.poll(), "first");
});

test("max priority queue", t => {
  const pqueue = new PriorityQueue(PriorityQueue.MAX);
  pqueue.push("first", 3);
  pqueue.push("second", 1);
  pqueue.push("third", 2);

  t.is(pqueue.peek(), "first");

  t.is(pqueue.poll(), "first");
  t.is(pqueue.poll(), "third");
  t.is(pqueue.poll(), "second");
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

test("priority queue can be cleared", t => {
  const pqueue = new PriorityQueue();
  pqueue.push("first", 1);
  pqueue.push("second", 2);
  pqueue.push("third", 3);

  t.is(pqueue.length, 3);
  t.is(pqueue.isEmpty(), false);

  pqueue.clear();

  t.is(pqueue.length, 0);
  t.is(pqueue.isEmpty(), true);
});
