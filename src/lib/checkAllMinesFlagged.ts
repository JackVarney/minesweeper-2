import { MinesweeperGrid } from "../types/MinesweeperGrid";

const checkAllMinesFlagged = (grid: MinesweeperGrid): boolean =>
  grid.every(row =>
    row.every(cell => !cell.hasMine || (cell.hasMine && cell.hasFlag))
  );

export { checkAllMinesFlagged };
