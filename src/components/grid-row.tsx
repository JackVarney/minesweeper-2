import { h } from "hyperapp";
import { Component } from "../types/Component";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { GridCell } from "./grid-cell";

import "./grid-row.postcss";

interface GridRowAttributes {
  row: MinesweeperGridCell[];
  onCellClick: (cell: MinesweeperGridCell) => void;
}

const GridRow: Component<GridRowAttributes> = attributes => {
  const { row, onCellClick } = attributes;

  return (
    <div class="grid-row">
      {row.map(cell => (
        <GridCell cell={cell} onCellClick={onCellClick} />
      ))}
    </div>
  );
};

export { GridRow };
