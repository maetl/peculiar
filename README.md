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

Elements are returned in first-in-first-out order.

```js
import Queue from "peculiar/queue"

const queue = new Queue();
queue.push("first")
queue.push("second")
queue.push("third")

queue.peek() // => first

queue.shift() // => first
queue.shift() // => second
queue.shift() // => third
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

pqueue.shift() // => second
pqueue.shift() // => third
pqueue.shift() // => first
```

Use `poll` to return a tuple-like array of the element and its priority.

```js
const [element, priority] = pqueue.poll()
```

To adjust all priorities by a fixed value, pass the term to `adjustBy`.

```js
const pqueue = new PriorityQueue();
pqueue.push("twenty", 20)
pqueue.push("fifty", 50)

// add 20 to all priorities
pqueue.adjustBy(20) // twenty => 40, fifty => 70

// subtract 10 from all priorities
pqueue.adjustBy(-10) // twenty => 30, fifty => 60
```
