interface Walls {
  topWall: boolean;
  rightWall: boolean;
  downWall: boolean;
  leftWall: boolean;
}


interface CanvasRenderingContext2D {
  pFillRect: CanvasRect["fillRect"];
  pMoveTo: this["moveTo"];
  pLineTo: this["lineTo"];
  pPutImageData: this["putImageData"];
  pGetImageData: this["getImageData"];
  pClearRect: this["clearRect"];
  pTranslate: this["translate"];
  drawLine: this["drawLine"];
  isFree: this["isFree"];
}
