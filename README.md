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
queue.add("first")
queue.add("second")
queue.add("third")

queue.removeFirst() // => first
queue.removeFirst() // => second
queue.removeFirst() // => third
```

### `PriorityQueue`

Elements with higher priority are returned before elements with lower priority.

```js
import PriorityQueue from "peculiar/priority-queue"

const pqueue = new PriorityQueue();
pqueue.add("first", 3)
pqueue.add("second", 1)
pqueue.add("third", 2)

pqueue.removeFirst() // => second
pqueue.removeFirst() // => third
pqueue.removeFirst() // => first
```
