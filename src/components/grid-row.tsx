import { h } from "hyperapp";
import { Component } from "../types/Component";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { GridCell } from "./grid-cell";
import { MinesweeperGrid } from "../types/MinesweeperGrid";

import "./grid-row.postcss";

interface GridRowAttributes {
  row: MinesweeperGridCell[];
  grid: MinesweeperGrid;
  onCellClick: (cell: MinesweeperGridCell) => void;
  onCellRightClick: (cell: MinesweeperGridCell) => void;
}

const GridRow: Component<GridRowAttributes> = attributes => {
  const { row, onCellClick, onCellRightClick, grid } = attributes;

  return (
    <div class="grid-row">
      {row.map(cell => (
        <GridCell
          cell={cell}
          onCellClick={onCellClick}
          onCellRightClick={onCellRightClick}
          grid={grid}
        />
      ))}
    </div>
  );
};

export { GridRow };
