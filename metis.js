export default class Graph {
  constructor() {
    this.index = {}
  }

  addNode(node) {
    if (!this.index[node]) {
      this.index[node] = new Set();
    }
  }

  addEdge(edge) {
    this.addNode(edge.from);
    this.addNode(edge.to);
    this.index[node].add(edge.to);
  }

  nodes() {
    return Object.keys(this.index);
  }

  edges() {
    let edges = [];
    const nodes = this.nodes();
    Object.keys(nodes).forEach(function(node) {
      edges = edges.concat(nodes[node].entries);
    });
    return edges;
  }
}
