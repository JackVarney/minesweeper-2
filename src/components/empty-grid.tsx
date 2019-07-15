import { h } from "hyperapp";
import { Component } from "../types/Component";
import { createEmptyGrid, createGrid } from "../lib/createGrid";
import { Grid } from "./grid";
import { MinesweeperGrid } from "../types/MinesweeperGrid";

interface EmptyGridAttributes {
  updateGrid: (grid: MinesweeperGrid) => void;
}

const EmptyGrid: Component<EmptyGridAttributes> = ({ updateGrid }) => {
  const grid = createEmptyGrid();

  return (
    <Grid
      grid={grid}
      onCellClick={() => {
        updateGrid(createGrid());
      }}
    />
  );
};

export { EmptyGrid };
