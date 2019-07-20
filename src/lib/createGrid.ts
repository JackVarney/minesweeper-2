import { MinesweeperGrid } from "../types/MinesweeperGrid";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { revealCell } from "./revealCell";

const GRID_SIZE = 10;
const MINE_COUNT = 10;

const createRange = () => Array.from({ length: GRID_SIZE });

const createDefaultCell = (x: number, y: number): MinesweeperGridCell => ({
  revealed: false,
  hasMine: false,
  hasFlag: false,
  point: {
    x,
    y
  }
});

const addMinesToGrid = (grid: MinesweeperGrid): void => {
  function addMines(amountOfMinesToAdd: number) {
    if (amountOfMinesToAdd === 0) return;

    for (let y = 1; y < GRID_SIZE; y += 1) {
      for (let x = 1; x < GRID_SIZE; x += 1) {
        const shouldAddMine = !grid[y][x].hasMine && Math.random() < 0.001;

        if (shouldAddMine) {
          amountOfMinesToAdd -= 1;

          grid[y][x].hasMine = true;
        }
      }
    }

    return addMines(amountOfMinesToAdd);
  }

  addMines(MINE_COUNT);
};

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

  addMinesToGrid(grid);

  // user will have already revealed this tile
  return revealCell(grid[y][x], grid);
};

export { createGrid, createGridWithNoConflicts };
