import test from "ava";
import { Queue } from "../src/peculiar.js";

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
  t.is(queue.length, 3);

  t.is(queue.poll(), "first");
  t.is(queue.poll(), "second");
  t.is(queue.poll(), "third");
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

test("queue can be cleared", t => {
  const queue = new Queue();
  queue.push("first");
  queue.push("second");
  queue.push("third");

  t.is(queue.length, 3);
  t.is(queue.isEmpty(), false);

  queue.clear();

  t.is(queue.length, 0);
  t.is(queue.isEmpty(), true);
});
