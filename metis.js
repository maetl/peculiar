import "babel-polyfill";

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

  nodes() {
    return this.index;
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
