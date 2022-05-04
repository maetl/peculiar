# Peculiar

A collection of JavaScript container data structures that support queueing and FIFO semantics.

## Status

[![npm](https://img.shields.io/npm/v/peculiar.svg)](https://npmjs.org/package/peculiar)
[![github](https://img.shields.io/github/workflow/status/maetl/peculiar/Node.js%20CI)](https://github.com/maetl/peculiar/actions)

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

queue.poll() // => first
queue.poll() // => second
queue.poll() // => third
```

To remove all current elements from the queue and reset it to a blank slate, call `clear`. Use the `length` accessor to read the size of the queue or `isEmpty` to check whether the queue has zero elements.

```js
const queue = new Queue();
queue.push("first")
queue.push("second")
queue.push("third")

queue.length // => 3
queue.isEmpty() // => false

queue.clear()

queue.length // => 0
queue.isEmpty() // => true
```

### `PriorityQueue`

Elements with higher priority are returned before elements with lower priority. The default is a min queue, meaning that the priority order goes from lowest number to highest number.

```js
import PriorityQueue from "peculiar/priority-queue"

const pqueue = new PriorityQueue();
pqueue.push("first", 3)
pqueue.push("second", 1)
pqueue.push("third", 2)

pqueue.peek() // => second

pqueue.poll() // => second
pqueue.poll() // => third
pqueue.poll() // => first
```

To use a max priority queue where the highest numbers are the highest priorities, pass the `PriorityQueue.MAX` flag or boolean `true` to the constructor.

```js
const pqueue = new PriorityQueue(PriorityQueue.MAX);
```

Use `pollIndex` to return a tuple-like array of the element and its priority index.

```js
const [element, priority] = pqueue.pollIndex()
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

To remove all current elements from the priority queue and reset it to a blank slate, call `clear`. Use the `length` accessor to read the size of the priority queue or `isEmpty` to check whether the queue has zero elements.

```js
const pqueue = new PriorityQueue();
pqueue.push("first", 3)
pqueue.push("second", 1)
pqueue.push("third", 2)

pqueue.length // => 3
pqueue.isEmpty() // => false

pqueue.clear()

pqueue.length // => 0
pqueue.isEmpty() // => true
```

## Roadmap

The library is close to complete for basic queue operations and the original code here has seen a bit of use in production over the past few years (before being packaged up into this library).

The following features are unplanned and haven’t seen any effort yet, but are potentially on the horizon. Some of these additional data structures go a little beyond queueing, but are a fairly good complement to what’s already here.

- Provide customizable comparator function rather than strict min/max in priority queue
- Provide `toArray` and `toSet` methods on each data structure
- Store priority queue nodes as struct-like objects rather than fake-tuple arrays
- Consider slicing off the null sentinel in the priority queue heap array
- Consider possible uses for typed array storage rather than dynamic arrays
- Add linked list with sorted insert as an alternative priority queue
- Add ring buffer and variations
- Add bucket queue
- Add splay tree
- Improve the documentation

Of course, these new data structures also break the pun-tastic focus of the library, but who really cares if it’s useful?

## License

This package is copyright 2019 Mark Rickerby and distributed freely under the terms of the MIT License. See the LICENSE file packaged with this software distribution.
