import { iterateSurroundingCells } from "./iterateSurroundingCells";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { MinesweeperGrid } from "../types/MinesweeperGrid";

const getSurroundingMineCount = (
  cell: MinesweeperGridCell,
  grid: MinesweeperGrid
) => {
  let surroundingMineCount = 0;

  iterateSurroundingCells(cell, grid, (x, y) => {
    const cellContainsMine = grid[y][x].hasMine;

    if (cellContainsMine) {
      surroundingMineCount += 1;
    }
  });

  return surroundingMineCount;
};

export { getSurroundingMineCount };
