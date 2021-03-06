import { h } from "hyperapp";
import { GridRow } from "./grid-row";
import { MinesweeperGrid } from "../types/MinesweeperGrid";
import { Component } from "../types/Component";

import "./grid.postcss";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";

interface GridAttributes {
  grid: MinesweeperGrid;
  onCellClick: (cell: MinesweeperGridCell) => void;
  onCellRightClick: (cell: MinesweeperGridCell) => void;
}

const Grid: Component<GridAttributes> = attributes => {
  const { grid, onCellClick, onCellRightClick } = attributes;

  return (
    <div class="grid">
      {grid.map(row => (
        <GridRow
          row={row}
          onCellClick={onCellClick}
          onCellRightClick={onCellRightClick}
          grid={grid}
        />
      ))}
    </div>
  );
};

export { Grid };
