import { MinesweeperGrid } from "../types/MinesweeperGrid";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { revealCell } from "./revealCell";

const GRID_SIZE = 10;

const createRange = () => Array.from({ length: GRID_SIZE });

const createDefaultCell = (x: number, y: number): MinesweeperGridCell => ({
  revealed: false,
  hasMine: Math.random() > 0.9,
  hasFlag: false,
  point: {
    x,
    y
  }
});

const createGrid = (): MinesweeperGrid =>
  createRange().map((row, y) =>
    createRange().map((cell, x) => createDefaultCell(x, y))
  );

// function to ensure that the first tile a user clicks does not have a mine
const createGridWithNoConflicts = (x: number, y: number): MinesweeperGrid => {
  const getValidGrid = (): MinesweeperGrid => {
    const grid = createGrid();

    if (grid[y][x].hasMine) {
      return getValidGrid();
    } else {
      return grid;
    }
  };

  const grid = getValidGrid();

  // user will have already revealed this tile
  return revealCell(grid[y][x], grid);
};

export { createGrid, createGridWithNoConflicts };
