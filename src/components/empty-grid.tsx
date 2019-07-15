import { h } from "hyperapp";
import { Component } from "../types/Component";
import { createGrid, createGridWithNoConflicts } from "../lib/createGrid";
import { Grid } from "./grid";
import { MinesweeperGrid } from "../types/MinesweeperGrid";

interface EmptyGridAttributes {
  updateGrid: (grid: MinesweeperGrid) => void;
}

const EmptyGrid: Component<EmptyGridAttributes> = ({ updateGrid }) => {
  const grid = createGrid();

  return (
    <Grid
      grid={grid}
      onCellClick={cell => {
        updateGrid(createGridWithNoConflicts(cell.point.x, cell.point.y));
      }}
    />
  );
};

export { EmptyGrid };
