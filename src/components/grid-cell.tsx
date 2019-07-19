import { h } from "hyperapp";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { Component } from "../types/Component";

import "./grid-cell.postcss";
import { getSurroundingMineCount } from "../lib/getSurroundingMineCount";
import { MinesweeperGrid } from "../types/MinesweeperGrid";

interface GridCellAttributes {
  cell: MinesweeperGridCell;
  grid: MinesweeperGrid;
  onCellClick: (cell: MinesweeperGridCell) => void;
}

function getCellClass(cell: MinesweeperGridCell): string {
  let base = "grid-cell";

  if (cell.hasMine) {
    base += " grid-cell--mine";
  }

  if (cell.revealed) {
    base += " grid-cell--revealed";
  } else {
    base += " grid-cell--hidden";
  }

  return base;
}

const GridCell: Component<GridCellAttributes> = attributes => {
  const { cell, grid, onCellClick } = attributes;

  return (
    <div class={getCellClass(cell)} onclick={() => onCellClick(cell)}>
      {cell.revealed && cell.hasMine
        ? "*"
        : getSurroundingMineCount(cell, grid)}
    </div>
  );
};

export { GridCell };
