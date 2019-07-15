import { MinesweeperGridItem } from "../types/MinesweeperGridItem";
import { MinesweeperGrid } from "../types/MinesweeperGrid";

const GRID_SIZE = 10;

const range = () => Array.from({ length: GRID_SIZE });

function getRow(): MinesweeperGridItem[] {
  return range().map(() => ({
    hasMine: Math.random() > 0.8
  }));
}

export default (): MinesweeperGrid => {
  const rows = range();

  return rows.map(getRow);
};
