import { Point } from "../types/Point";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { MinesweeperGrid } from "../types/MinesweeperGrid";

const iterateSurroundingCells = (
  cell: MinesweeperGridCell,
  grid: MinesweeperGrid,
  cb: (x: number, y: number) => void
) => {
  const gridSize: number = grid.length - 1;
  const cellCoords: Point = cell.point;

  let xMin: number = cellCoords.x;
  let yMin: number = cellCoords.y;
  let xMax: number = cellCoords.x;
  let yMax: number = cellCoords.y;

  if (cellCoords.x > 0) {
    xMin -= 1;
  }

  if (cellCoords.y > 0) {
    yMin -= 1;
  }

  if (cellCoords.x < gridSize) {
    xMax += 1;
  }

  if (cellCoords.y < gridSize) {
    yMax += 1;
  }

  for (let x = xMin; x <= xMax; x += 1) {
    for (let y = yMin; y <= yMax; y += 1) {
      const isCenterCell = x === cellCoords.x && y === cellCoords.y;

      if (!isCenterCell) {
        cb(x, y);
      }
    }
  }
};

export { iterateSurroundingCells };
