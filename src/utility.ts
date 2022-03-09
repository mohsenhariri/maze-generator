const width = 10;
const height = 10;
const neighbors = (x: number, y: number) => {
  const neighborNode = new Set();
  if (x - 1 >= 0) {
    neighborNode.add([x - 1, y]);
  }
  if (y - 1 >= 0) {
    neighborNode.add([x, y - 1]);
  }
  if (x + 1 < width) {
    neighborNode.add([x + 1, y]);
  }
  if (y + 1 < height) {
    neighborNode.add([x, y + 1]);
  }
  return neighborNode;
};

const nodeToXY = (node: string) => {
  const coordinate = node.split(",");
  const x = parseInt(coordinate[0], 10);
  const y = parseInt(coordinate[1], 10);
  return [x, y];
};

export { neighbors, nodeToXY };
