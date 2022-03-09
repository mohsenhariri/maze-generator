import "./assets/styles/style.css";
import PixelCanvas from "./PixelCanvas";
import Stack from "./Stack";
import Queue from "./Queue";
import { neighbors, nodeToXY } from "./utility";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const width = 10;
const height = 10;

const canvasWidth = 500; // 100
const canvasHeight = 500; // 100
const scaleX = canvasWidth / width;
const scaleY = canvasHeight / height;

const fragment = document.createDocumentFragment() as DocumentFragment;
const background = new PixelCanvas(
  canvasWidth,
  canvasHeight,
  scaleX,
  scaleY,
  "background",
  fragment
);

document.body.appendChild(fragment);
const ctx = background.ctx;

const makeGrid = (
  ctx: CanvasRenderingContext2D,
  boardW: number,
  boardH: number
) => {
  ctx.lineWidth = 1;
  ctx.strokeStyle = "yellow";

  for (let r = 1; r < boardH; r += 1) {
    // Horizontal lines
    ctx.beginPath();
    ctx.pMoveTo(0, r);
    ctx.pLineTo(boardW, r);
    ctx.stroke();
    ctx.closePath();
  }
  for (let c = 1; c < boardW; c += 1) {
    // Vertical lines
    ctx.beginPath();
    ctx.pMoveTo(c, 0);
    ctx.pLineTo(c, boardH);
    ctx.stroke();
    ctx.closePath();
  }
};
makeGrid(ctx, width, height);

// const ds = new Stack();
const ds = new Queue()

const visitedNodes = new Set();
const startNode = `${0},${0}`;

ds.add(startNode);

let currentNode = startNode;

(async () => {
  // while (stack.len() < 1) {
  while (visitedNodes.size < width * height) {
    visitedNodes.add(currentNode);

    const [currentX, currentY] = nodeToXY(currentNode);

    const unvisitedNeighborsNodes = new Map();
    let idx = 0;
    for (let item of neighbors(currentX, currentY)) {
      if (!visitedNodes.has(`${item[0]},${item[1]}`)) {
        unvisitedNeighborsNodes.set(idx, item);
        idx++;
      }
    }
    ctx.fillStyle = "pink";
    ctx.pFillRect(currentX + 0.1, currentY + 0.1, 0.8, 0.8);
    if (idx !== 0) {
      ds.add(currentNode);

      const [selectedNeighborX, selectedNeighborY] =
        unvisitedNeighborsNodes.get(Math.floor(Math.random() * idx));

      if (selectedNeighborX > currentX) {
        // right
        ctx.drawLine(currentX + 1, currentY, currentX + 1, currentY + 1);
      } else if (selectedNeighborX < currentX) {
        // left
        ctx.drawLine(currentX, currentY, currentX, currentY + 1);
      } else {
        //down
        if (selectedNeighborY > currentY) {
          ctx.drawLine(currentX, currentY + 1, currentX + 1, currentY + 1);
        } else {
          // up
          ctx.drawLine(currentX, currentY, currentX + 1, currentY);
        }
      }
      currentNode = `${selectedNeighborX},${selectedNeighborY}`;
    } else {
      currentNode = ds.pick();
    }
    await sleep(50);
    ctx.fillStyle = "#333";
    ctx.pFillRect(currentX + 0.1, currentY + 0.1, 0.8, 0.8);
  }
  console.log("Finish");
})();

ctx.drawLine(0, 0, 0, height, "yellow");
ctx.drawLine(0, 0, width, 0, "yellow");
ctx.drawLine(0, height, width, height, "yellow");
ctx.drawLine(width, 0, width, height, "yellow");


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}