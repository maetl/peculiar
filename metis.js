import "babel-polyfill";

export class Node {
  constructor(id, graph) {
    this._id = id;
    this._graph = graph;
  }

  get id() {
    return this._id;
  }

  get outgoing() {
    return this._graph.adjacentNodes(this._id);
  }
}

export class Graph {
  constructor() {
    this.index = new Map();
  }

  addNode(node) {
    if (!this.index.has(node)) {
      this.index.set(node, new Set());
    }
  }

  addEdge(edge) {
    this.addNode(edge.from);
    this.addNode(edge.to);
    this.index.get(edge.from).add(edge.to);
  }

  nodesCount() {
    return this.index.size;
  }

  edgesCount() {
    return this.edges().length;
  }

  adjacentNodes(id) {
    const _graph = this;
    return [...this.index.get(id)].map(function(id) {
      return new Node(id, _graph);
    });
  }

  nodes() {
    const _graph = this;
    return [...this.index].map(function(entry) {
      return new Node(entry[0], _graph);
    });
  }

  edges() {
    let edges = [];
    this.index.forEach(function(node) {
      node.forEach(function(edge) {
        edges.push({
          from: node,
          to: edge
        });
      });
    });
    return edges;
  }
}
