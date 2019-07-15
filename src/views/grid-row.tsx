import { h } from "hyperapp";
import { Component } from "../types/Component";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { GridCell } from "./grid-cell";

import "./grid-row.postcss";

interface GridRowAttributes {
  row: MinesweeperGridCell[];
}

const GridRow: Component<GridRowAttributes> = attributes => {
  const { row } = attributes;

  return (
    <div class="grid-row">
      {row.map(cell => (
        <GridCell cell={cell} />
      ))}
    </div>
  );
};

export { GridRow };
