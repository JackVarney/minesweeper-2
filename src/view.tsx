import { h, View } from "hyperapp";
import { Grid } from "./components/grid";
import { State } from "./types/State";
import { Actions } from "./types/Actions";
import { MinesweeperGridCell } from "./types/MinesweeperGridCell";
import { createGridWithNoConflicts, createGrid } from "./lib/createGrid";

import "./view.postcss";

const view: View<State, Actions> = ({ grid }, { updateGrid }) => {
  function onCellClick(cell: MinesweeperGridCell) {
    if (grid === undefined) {
      updateGrid(createGridWithNoConflicts(cell.point.x, cell.point.y));
    } else {
    }
  }

  return (
    <div class="view">
      <Grid
        grid={grid === undefined ? createGrid() : grid}
        onCellClick={onCellClick}
      />
    </div>
  );
};

export { view };
