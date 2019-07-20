import { getSurroundingMineCount } from "./getSurroundingMineCount";
import { getSurroundingCells } from "./getSurroundingCells";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { MinesweeperGrid } from "../types/MinesweeperGrid";

const revealCell = (
  initialCell: MinesweeperGridCell,
  grid: MinesweeperGrid
): MinesweeperGrid => {
  function cleanZeroes(cells: MinesweeperGridCell[]) {
    const unrevealedCellsWithZeroSurroundingMines = cells.filter(
      cell =>
        cell.revealed === false && getSurroundingMineCount(cell, grid) === 0
    );

    cells.forEach(({ point: { x, y } }) => {
      grid[y][x].revealed = true;
    });

    if (unrevealedCellsWithZeroSurroundingMines.length === 0) {
      return;
    }

    return cleanZeroes(
      unrevealedCellsWithZeroSurroundingMines.reduce(
        (acc, cur) => [...acc, ...getSurroundingCells(cur, grid)],
        []
      )
    );
  }

  cleanZeroes([initialCell]);

  return grid;
};

export { revealCell };
