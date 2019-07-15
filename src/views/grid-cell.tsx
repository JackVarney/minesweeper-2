import { h } from "hyperapp";
import { MinesweeperGridCell } from "../types/MinesweeperGridCell";
import { Component } from "../types/Component";

import "./grid-cell.postcss";

interface GridCellAttributes {
  cell: MinesweeperGridCell;
}

const GridCell: Component<GridCellAttributes> = attributes => {
  const { cell } = attributes;

  return <div class="grid-cell">{cell.hasMine ? "!" : ":)"}</div>;
};

export { GridCell };
