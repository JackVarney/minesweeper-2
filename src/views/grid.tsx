import { h } from "hyperapp";
import { GridRow } from "./grid-row";
import { MinesweeperGrid } from "../types/MinesweeperGrid";
import { Component } from "../types/Component";

import "./grid.postcss";

interface GridAttributes {
  grid: MinesweeperGrid;
}

const Grid: Component<GridAttributes> = attributes => {
  const { grid } = attributes;

  return (
    <div class="grid">
      {grid.map(row => (
        <GridRow row={row} />
      ))}
    </div>
  );
};

export { Grid };
