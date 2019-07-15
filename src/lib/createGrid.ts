import { MinesweeperGrid } from "../types/MinesweeperGrid";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";

const GRID_SIZE = 10;

const createRange = () => Array.from({ length: GRID_SIZE });

const createEmptyRow = (): MinesweeperGridCell[] =>
  createRange().map(() => ({
    hasMine: false,
    revealed: false
  }));

const createRow = (): MinesweeperGridCell[] =>
  createRange().map(() => ({
    hasMine: Math.random() > 0.9,
    revealed: Math.random() > 0.5
  }));

const createGrid = (): MinesweeperGrid => createRange().map(createRow);

const createEmptyGrid = (): MinesweeperGrid =>
  createRange().map(createEmptyRow);

export { createGrid, createEmptyGrid };
