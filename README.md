# Metis

A simple handcrafted library of standard data structures in JavaScript.

## Install

```
npm install --save metis
```

## Contents

- `Queue`
- `PriorityQueue`

## Usage

### `Queue`

Elements are returned in on first-in-first-out order.

```js
import { Queue } from "metis"

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
import { PriorityQueue } from "metis"

const queue = new PriorityQueue();
queue.add("first", 3)
queue.add("second", 1)
queue.add("third", 2)

queue.removeFirst() // => second
queue.removeFirst() // => third
queue.removeFirst() // => first
```
