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
  onCellRightClick: (cell: MinesweeperGridCell) => void;
}

function getCellClass(
  cell: MinesweeperGridCell,
  grid: MinesweeperGrid
): string {
  let base = "grid-cell";

  if (cell.revealed) {
    const surroundingMineCount: number = getSurroundingMineCount(cell, grid);

    if (surroundingMineCount === 0) {
      base += " grid-cell--revealed-zero";
    } else if (surroundingMineCount === 1) {
      base += " grid-cell--revealed-one";
    } else if (surroundingMineCount === 2) {
      base += " grid-cell--revealed-two";
    } else if (surroundingMineCount === 3) {
      base += " grid-cell--revealed-three";
    } else {
      base += " grid-cell--revealed-four-plus";
    }
  } else {
    base += " grid-cell--hidden";
  }

  if (cell.hasFlag) {
    base += " grid-cell--flagged";
  }

  return base;
}

function getCellContent(
  cell: MinesweeperGridCell,
  grid: MinesweeperGrid
): string {
  let content: string = "";

  const surroundingMineCount: number = getSurroundingMineCount(cell, grid);

  if (cell.revealed && surroundingMineCount > 0) {
    content = String(surroundingMineCount);
  }

  return content;
}

const GridCell: Component<GridCellAttributes> = attributes => {
  const { cell, grid, onCellClick, onCellRightClick } = attributes;

  return (
    <div
      class={getCellClass(cell, grid)}
      onclick={() => onCellClick(cell)}
      oncontextmenu={e => {
        e.preventDefault();
        onCellRightClick(cell);
      }}
    >
      <span>{getCellContent(cell, grid)}</span>
    </div>
  );
};

export { GridCell };
