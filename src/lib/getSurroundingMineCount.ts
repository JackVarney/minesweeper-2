import { getSurroundingCells } from "./getSurroundingCells";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { MinesweeperGrid } from "../types/MinesweeperGrid";

const getSurroundingMineCount = (
  cell: MinesweeperGridCell,
  grid: MinesweeperGrid
): number =>
  getSurroundingCells(cell, grid).reduce((acc, cur) => {
    if (cur.hasMine) {
      acc += 1;
    }

    return acc;
  }, 0);

export { getSurroundingMineCount };
