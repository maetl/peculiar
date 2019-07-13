# Peculiar

A collection of JavaScript container data structures that support queueing and FIFO semantics.

## Contents

- `Queue`
- `PriorityQueue`

## Install

```
npm install --save peculiar
```

## Usage

### `Queue`

Elements are returned in on first-in-first-out order.

```js
import Queue from "peculiar/queue"

const queue = new Queue();
queue.push("first")
queue.push("second")
queue.push("third")

queue.peek() // => first

queue.pop() // => first
queue.pop() // => second
queue.pop() // => third
```

### `PriorityQueue`

Elements with higher priority are returned before elements with lower priority.

```js
import PriorityQueue from "peculiar/priority-queue"

const pqueue = new PriorityQueue();
pqueue.push("first", 3)
pqueue.push("second", 1)
pqueue.push("third", 2)

pqueue.peek() // => second

pqueue.pop() // => second
pqueue.pop() // => third
pqueue.pop() // => first
```
